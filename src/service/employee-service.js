const employeeRepository = require('../repository/employee');
const departmentRepository = require('../repository/department');
const { Logger } = require('motifer');
const logger = Logger.getLogger(__filename);

const saveEmployee = async (employee) => {
    logger.debug('Employee details are:', employee);
    const departement = await departmentRepository.getDepartmentByID(employee);
    if (!departement.length) {
      throw new Error('Invalid departmant ID.');
    }
    const response = await employeeRepository.saveEmployeeInfo(employee);
     return response;
};

const getEmployee = async (employee) => {
    logger.debug('Employee details are:', employee);
    const response = await employeeRepository.getEmployeeInfo(employee);
     return response;
};

module.exports = {
    saveEmployee,
    getEmployee
};