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
