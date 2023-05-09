const Employee = require('../models/employee');

const saveEmployeeInfo = async (employee) => {
    var employee = new Employee(employee);
    const response = await employee.save(employee);
     return response;
};

const getEmployeeInfo = async (employee) => {
    const query = employee;
    const condition = {__v: 0};
    const response = await Employee.find(query, condition);
    
     return response;
};

module.exports = {
    saveEmployeeInfo,
    getEmployeeInfo
};