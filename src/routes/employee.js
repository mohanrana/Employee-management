const router = require('express')();
const { Logger } = require('motifer');
const logger = Logger.getLogger(__filename);
const employee = require('../service/employee-service');
const validation = require('../validations/employee-validator');
const  { Response } = require('./../utils/responses');

router.post('/add', async (req, res, next) => {
    const errors = await validation.employeDetailsValidation(req);
    if (!errors.isEmpty()) {
        logger.debug('Validation Errors are:', errors);

        return next({ message: errors.array()[0].msg, statusCode: 400 });
    }
    try {
        const response = await employee.saveEmployee(req.body);

        return res.status(201).json(new Response('Success', "Employee details saved successfully."));

    } catch (error) {
        next(error);
    }
});

router.get('/list', async (req, res, next) => {
    const errors = await validation.getEmployeDetailsValidation(req);
    if (!errors.isEmpty()) {
        logger.debug('Validation Errors are:', errors);

        return next({ message: errors.array()[0].msg, statusCode: 400 });
    }
    try {
        const response = await employee.getEmployee(req.query);

        return res.status(200).json(new Response('Success', "The employee records.", response));
    } catch (error) {
        next(error);
    }
});


module.exports = router;