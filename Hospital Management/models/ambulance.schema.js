const mongoose = require('mongoose')
var ambulanceSchema = new mongoose.Schema({
    ambulance_no: {
        type: 'String'
    },
    driver_details: [{
        driver_name: {
            type: 'String'
        },
        license_no: {
            type: 'String'
        },
        age: {
            type: 'String'
        },
        dob: {
            type: 'String'
        },
        gender: {
            type: 'String'
        },
        driver_photo: {
            type: 'String'
        }
    }],
    owner_name: {
        type: 'String'
    },
    pancard: {
        type: 'String'
    },
    insurance_paper: {
        type: 'String'
    },
    pollution: {
        type: 'String'
    },
    owner_photo: {
        type: 'String'
    },
    vehicle_photo: {
        type: 'String'
    },
    status: {
        type: Boolean
    },
    create_date: {
        type: 'String'
    },
    update_date: {
        type: 'String'
    }
})
var ambulanceModel = mongoose.model('ambulance', ambulanceSchema)
module.exports = ambulanceModel