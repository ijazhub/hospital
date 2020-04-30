const mongoose = require('mongoose')
var diagnostic_orderSchema = new mongoose.Schema({
    diagnostic_id:{
        type:'String'
    },
    diagnostic_name:{
        type:'String'
    },
    patient_id: {
        type: 'String'
    },
    patient_name: {
        type: 'String'
    },
    appointment_id: {
        type: 'String'
    },
    doctor_id: {
        type: 'String'
    },
    doctor_name: {
        type: 'String'
    },
    test: [{
        test_id: {
            type: 'String'
        },
        is_sample_received: {
            type: Boolean,
            default:false
        },
        sample_received_date_time: {
            type: Date
        },
        test_report: {
            type: 'String'
        }
    }],
    disease:{

    },
    status:{
        type:Boolean,
        default:true
    },
    is_test_done: {
        type: Boolean,  
        default:false
    },
    test_done_date_time: {
        type: Date
    }
})
var diagnostic_orderModel=mongoose.model('diagnostic_order',diagnostic_orderSchema)
module.exports=diagnostic_orderModel