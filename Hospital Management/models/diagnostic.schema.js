const mongoose=require('mongoose')
var diagnosticSchema=new mongoose.Schema({
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
    no_of_lab_person:{
        type:Number
    },
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
var diagnosticModel=mongoose.model('diagnostic',diagnosticSchema)
module.exports=diagnosticModel