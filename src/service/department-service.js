const departmentRepository = require('../repository/department');
const { Logger } = require('motifer');
const logger = Logger.getLogger(__filename);

const saveDepartment = async (department) => {
    logger.debug('Department details are:', department);
    const response = await departmentRepository.saveDepartmentInfo(department);

    return response;
};

const getDepartment = async () => {
    const response = await departmentRepository.getDepartmentInfo();
    
     return response;
};

module.exports = {
    saveDepartment,
    getDepartment
};