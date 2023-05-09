const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employee_id: {  
        type: String, 
        required: true,
        unique: true 
    },
    first_name: {  
        type: String, 
        required: true
    },
    last_name: {  
        type: String
    },
    email_address: {  
        type: String, 
        required: true
    },
    department_id: {  
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Employee', employeeSchema);