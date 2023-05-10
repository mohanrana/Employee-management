const Employee = require('../models/employee');

const saveEmployeeInfo = async (employee) => {
    var employee = new Employee(employee);
    const response = await employee.save(employee);
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
        result.push({
            employee_id: employee._id,
            first_name: employee.first_name,
            last_name: employee.last_name,
            email_address: employee.email_address,
            department_id: employee.department_id,
            department_name: employee.department_info[0].department_name
        });
    });

    return result;
};

module.exports = {
    saveEmployeeInfo,
    getEmployeeInfo
};