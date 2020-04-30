const mongoose = require('mongoose')
var pharmacist_orderSchema = new mongoose.Schema({
    patient_id: {
        type: 'String'
    },
    patient_name: {
        type: 'String'
    },
    doctor_id: {
        type: 'String'
    },
    doctor_name:{
        type:'String'
    },
    pharmacist_id:{
        type:'String'
    },
    pharmacist_name:{
        type:'String'
    },
    appointment_id:{
        type:'String'
    },
    items:[{
        name:{
            type:'String'
        },
        configuration:{
            type:'String'
        },
        routine:{
            type:'String'
        },
        amount:{
            type:'String'
        },
        gst:{
            type:'String'
        },
        total:{
            type:'String'
        }
    }],
    total_amount:{
        type:'String'
    },
    gst_total:{
        type:'String'
    },
    grand_total:{
        type:'String'
    },
    payment_status:{
        type:'String'
    },
    order_status:{
        type:'String'
    },
    cash_received:{
        type:'String'
    },
    dispatch_date:{
        type:Date
    },
    create_date:{
        type:Date
    },
    update_date:{
        type:Date
    }
})
var pharmacist_orderModel=mongoose.model('pharmacist_order',pharmacist_orderSchema)
module.exports=pharmacist_orderModel