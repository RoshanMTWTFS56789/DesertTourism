const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    YourPassword:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true,
        unique:true
    }

})

//now Create collection

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;