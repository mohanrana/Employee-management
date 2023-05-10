const { Logger } = require('motifer');
const logger = Logger.getLogger(__filename);
const { check, validationResult } = require('express-validator');

exports.departmentDetailsValidation = async (req) => {
  await check('department_name')
    .exists()
    .withMessage('department_name name is required.')
    .notEmpty()
    .withMessage("department_name name shouldn't be empty.")
    .isString()
    .withMessage('department_name name should be a string.')
    .trim()
    .run(req);

  const errors = validationResult(req);
  logger.debug(`Validators failure ${errors}`);

  return errors;
};

exports.getDepartmentValidation = async (req) => {
  await check('page')
    .exists()
    .withMessage('page is required.')
    .notEmpty()
    .withMessage("page shouldn't be empty.")
    .isNumeric()
    .withMessage('page should be a number.')
    .run(req);

    await check('size')
    .exists()
    .withMessage('size is required.')
    .notEmpty()
    .withMessage("size shouldn't be empty.")
    .isNumeric()
    .withMessage('size should be a number.')
    .run(req);

  const errors = validationResult(req);
  logger.debug(`Validators failure ${errors}`);

  return errors;
};