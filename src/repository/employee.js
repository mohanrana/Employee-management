const Employee = require('../models/employee');
const mogoose = require('mongoose');

const saveEmployeeInfo = async (employee) => {
    employee.department_id = new mogoose.Types.ObjectId(employee.department_id);
    const employeee = new Employee(employee);
    const response = await employeee.save(employee);
    return response;
};

const getEmployeeInfo = async (employee) => {
    const aggQuery = [
        { "$match": employee },
        {
            $lookup:
            {
                from: "departments",
                localField: "department_id",
                foreignField: "_id",
                as: "department_info"
            }
        }]

    const response = await Employee.aggregate(aggQuery);
    if (!response.length) {
        throw new Error('No employee found.');
    }
    const result = [];
    response.forEach((employee) => {
        const obj = {
            employee_id: employee._id,
            first_name: employee.first_name,
            last_name: employee.last_name,
            email_address: employee.email_address,
            department_id: employee.department_id,
            department_name: 'Not assigned'
        }
        if (employee.department_info && employee.department_info.length) {
            obj['department_name'] = employee.department_info[0].department_name;
        }

        result.push(obj);
    });

    return result;
};

module.exports = {
    saveEmployeeInfo,
    getEmployeeInfo
};