const router = require('express')();
const { Logger } = require('motifer');
const logger = Logger.getLogger(__filename);
const employee = require('../service/employee-service');
const validation = require('../validations/employee-validator');

router.post('/employee', async (req, res, next) => {
    const errors = await validation.employeDetailsValidation(req);
    if (!errors.isEmpty()) {
        logger.debug('Validation Errors are:', errors);

        return next({ message: errors.array()[0].msg, statusCode: 400 });
    }
    try {
        const response = await employee.saveEmployee(req.body);

        res.status(201).json(`Employee details saved successfully.`);
    } catch (error) {
        next(error);
    }
});

router.get('/employee', async (req, res, next) => {
    const errors = await validation.getEmployeDetailsValidation(req);
    if (!errors.isEmpty()) {
        logger.debug('Validation Errors are:', errors);

        return next({ message: errors.array()[0].msg, statusCode: 400 });
    }
    try {
        const response = await employee.getEmployee(req.query);

        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
});


module.exports = router;