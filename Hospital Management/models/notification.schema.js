const mongoose=require('mongoose')
var notificationSchema=new mongoose.Schema({
    patient_id:{
        type:'String'
    },
    notes:{
        type:'String'
    },
    need_ambulance:{
        type:Boolean
    },
    time_ambulance:{
        type:Date
    },
    critical_status:{
        type:Boolean
    },
    location:{
        latitude:{
            type:'String'
        },
        longitude:{
            type:'String'
        },
        address:{
            type:'String'
        }
    },
    notification_type:{
        type:'String'
    }
})
var notificationModel=mongoose.model('patient_request',notificationSchema)
module.exports=notificationModel
