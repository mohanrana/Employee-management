const router = require('express')();
const { Logger } = require('motifer');
const logger = Logger.getLogger(__filename);
const department = require('../service/department-service');
const validation = require('../validations/department-validator');
const  { Response } = require('./../utils/responses');

router.post('/add', async (req, res, next) => {
    const errors = await validation.departmentDetailsValidation(req);
    if (!errors.isEmpty()) {
        logger.debug('Validation Errors are:', errors);

        return next({ message: errors.array()[0].msg, statusCode: 400 });
    }
    try {
        await department.saveDepartment(req.body);

        return res.status(201).json(new Response('Success', "Department created successfully"));
    } catch (error) {
        if(error.code === 11000) {
            return next({ message: 'Department already exists', statusCode: 400 });
        }

        return next(error);
    }
});

router.get('/list', async (req, res, next) => {
    try {
        const response = await department.getDepartment(req.query);

        return res.status(200).json(new Response('Success', "The department records.", response));
    } catch (error) {
        next(error);
    }
});


module.exports = router;