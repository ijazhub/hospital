const mongoose = require('mongoose')
var nurseSchema = new mongoose.Schema({
    first_name: {
        type: 'String'
    },
    last_name: {
        type: 'String'
    },
    email: {
        type: 'String'
    },
    phone: {
        type: 'String'
    },
    password: {
        type: 'String'
    },
    address: {
        type: 'String'
    },
    city: {
        type: 'String'
    },
    dob: {
        type: 'String'
    },
    age: {
        type: 'String'
    },
    yearsOfExperience: {
        type: 'String'
    },
    gender: {
        type: 'String'
    },
    designation:{
        type:'String'
    },
    speciality:[{
        name:{
            type:'String'
        }
    }],
    qualification: [{
        name: {
            type: 'String'
        }
    }],
    language: [{
        name: {
            type: 'String'
        }
    }],
    digital_sign: {
        type: 'String'
    },
    status: {
        type: Boolean
    },
    create_date: {
        type: Date
    },
    update_date: {
        type: Date
    }
})
var nurseModel = mongoose.model('nurse', nurseSchema)
module.exports = nurseModel