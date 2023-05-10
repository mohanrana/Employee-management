/* eslint-disable import/newline-after-import */
const { Logger } = require('motifer');
const logger = Logger.getLogger(__filename);
const { check, validationResult, param } = require('express-validator');

const checkNumber = (value) => {
  if (value === 0 || value === '0') throw new Error('Amount can not be 0.');

  return true;
};

exports.employeDetailsValidation = async (req) => {
  await check('first_name')
    .exists()
    .withMessage('first_name name is required.')
    .notEmpty()
    .withMessage("first_name name shouldn't be empty.")
    .isString()
    .withMessage('first_name name should be a string.')
    .trim()
    .run(req);

    await check('last_name')
    .exists()
    .withMessage('last_name name is required.')
    .notEmpty()
    .withMessage("last_name name shouldn't be empty.")
    .isString()
    .withMessage('last_name name should be a string.')
    .trim()
    .run(req);

    await check('email_address')
    .exists()
    .withMessage('email_address name is required.')
    .notEmpty()
    .withMessage("email_address name shouldn't be empty.")
    .isString()
    .withMessage('email_address name should be a string.')
    .isEmail()
    .withMessage('email_address name should be a valid email.')
    .trim()
    .run(req);

    await check('department_id')
    .exists()
    .withMessage('department_id name is required.')
    .notEmpty()
    .withMessage("department_id name shouldn't be empty.")
    .run(req);

  const errors = validationResult(req);
  logger.debug(`Validators failure ${errors}`);

  return errors;
};

exports.fetchWallet = async (req) => {
  await param('walletId')
    .exists()
    .withMessage('walletId is required')
    .isString()
    .withMessage('walletId shoud be a string.')
    .withMessage('Invalid walletId.')
    .run(req);
  const errors = validationResult(req);
  logger.debug(`Validators failure ${errors}`);

  return errors;
};

exports.createTransaction = async (req) => {
  await check('walletId')
    .exists()
    .withMessage('walletId is required')
    .isString()
    .withMessage('walletId shoud be a string.')
    .withMessage('Invalid walletId.')
    .run(req);
  await check('amount')
    .exists()
    .withMessage('amount is required.')
    .isNumeric()
    .withMessage('amount should be a number.')
    .trim()
    .custom((value) => checkNumber(value))
    .run(req);
  await check('description')
    .exists()
    .withMessage('The description is required.')
    .notEmpty()
    .withMessage('The description should not be empty.')
    .isLength({ max: 20 })
    .withMessage('description length should not be more than 20 character.')
    .optional()
    .run(req);
  const errors = validationResult(req);
  logger.debug(`Validators failure ${errors}`);

  return errors;
};
