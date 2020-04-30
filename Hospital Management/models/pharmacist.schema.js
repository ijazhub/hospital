const mongoose = require('mongoose')
var pharmacistSchema = new mongoose.Schema({
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
    proprietor_name: {
        type: 'String'
    },
    license_no: {
        type: 'String'
    },
    license_photo: {
        type: 'String'
    },
    gst_no: {
        type: 'String'
    },
    year_of_establishment: {
        type: 'String'
    },
    shop_photo: {
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
    designation: {
        type: 'String'
    },
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
    location: {
        latitude: {
            type: 'String'
        },
        longitude: {
            type: 'String'
        },
        address: {
            type: 'String'
        }
    },
    digital_sign: {
        type: 'String'
    },
    status: {
        type: Boolean
    },
    orders:[{
        patient_id:{
            type:'String'
        },
        patient_name:{
            type:'String'
        },
        amount:{
            type:'String'
        },
        dispatch_date:{
            type:'String'
        }
    }],
    create_date: {
        type: Date
    },
    update_date: {
        type: Date
    }
})
var pharmacistModel = mongoose.model('pharmacist', pharmacistSchema)
module.exports = pharmacistModel