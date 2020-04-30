const mongoose = require('mongoose')
var patientSchema = new mongoose.Schema({
    first_name: {
        type: 'String'
    },
    last_name: {
        type: 'String'
    },
    email: {
        type: 'String'
    },
    number: {
        type: 'String'
    },
    is_phone_verify: {
        type: Boolean
    },
    password: {
        type: 'String'
    },
    address: {
        type: 'String'
    },
    gender: {
        type: 'String'
    },
    city: {
        type: 'String'
    },
    dob: {
        type: Date
    },
    age: {
        type: 'String'
    },
    wallet_balance: {
        type: 'String'
    },
    diseases: [{
        name: {
            type: 'String'
        }
    }],
    family: [{
        first_name: {
            type: 'String'
        },
        last_name: {
            type: 'String'
        },
        number: {
            type: 'String'
        },
        relation: {
            type: 'String'
        },
        email: {
            type: 'String'
        },
        is_phone_verify: {
            type: 'String'
        },

    }]
})
var patientModel = mongoose.model('patient', patientSchema)
module.exports = patientModel