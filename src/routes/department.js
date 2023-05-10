const router = require('express')();
const { Logger } = require('motifer');
const logger = Logger.getLogger(__filename);
const department = require('../service/department-service');
const validation = require('../validations/department-validator');

router.post('/department', async (req, res, next) => {
    const errors = await validation.departmentDetailsValidation(req);
    if (!errors.isEmpty()) {
        logger.debug('Validation Errors are:', errors);

        return next({ message: errors.array()[0].msg, statusCode: 400 });
    }
    try {
        const response = await department.saveDepartment(req.body);

        res.status(201).json(`Department details saved successfully.`);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const response = await employee.getEmployee(req.body);

        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
});


module.exports = router;