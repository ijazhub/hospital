const mongoose = require('mongoose')
var nutritionist_appointmentSchema = new mongoose.Schema({
    appointment_id: {
        type: String
    },
    patient_id: {
        type: String
    },
    patient_name: {
        type: String
    },
    doctor_id: {
        type: String
    },
    doctor_name: {
        type: String
    },
    nutritionist_id: {
        type: String
    },
    nutritionist_name: {
        type: String
    },
    prescription: [{
        name: {
            type: String
        },
        routine: {
            type: String
        },
        file: {
            type: String
        }
    }],
    disease:{

    },
    create_date: {
        type: Date
    },
    update_date: {
        type: Date
    }
})
var nutritionist_appointmentModel = mongoose.model('nutritionist_appointment', nutritionist_appointmentSchema)
module.exports = nutritionist_appointmentModel