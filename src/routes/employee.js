const router = require('express').Router();
const employee = require('../service/employee-service');

router.post('/', async (req, res, next) => {
    try {
        const response = await employee.saveEmployee(req.body);

        res.status(201).json(`Employee details saved successfully.`);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const response = await employee.getEmployee(req.body);

        res.status(201).json( response);
    } catch (error) {
        next(error);
    }
});


module.exports = router;