const employeeRepository = require('../repository/employee');

const saveEmployee = async (employee) => {
    const response = await employeeRepository.saveEmployeeInfo(employee);
     return response;
};

const getEmployee = async (employee) => {
    const response = await employeeRepository.getEmployeeInfo(employee);
     return response;
};

module.exports = {
    saveEmployee,
    getEmployee
};