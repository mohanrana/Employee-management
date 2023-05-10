const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: {  
        type: String, 
        required: true
    },
    last_name: {  
        type: String
    },
    email_address: {  
        type: String, 
        required: true,
        unique: true
    },
    department_id: {  
        type: Object, 
        required: true
    }
});

module.exports = mongoose.model('Employee', employeeSchema);