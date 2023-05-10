const Department = require('../models/departement');

const saveDepartmentInfo = async (department) => {
    var department = new Department(department);
    const response = await department.save(department);

    return response;
};

const getDepartmentInfo = async () => {
    const query = {};
    const condition = { __v: 0 };
    const response = await Department.find(query, condition);
    const result = [];
    response.forEach((department) => {
        result.push({
            id: department.id,
            department_name: department.department_name
        });
    });

    return result;
};

module.exports = {
    saveDepartmentInfo,
    getDepartmentInfo
};