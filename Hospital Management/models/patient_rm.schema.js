const mongoose=require('mongoose')
var patient_rm_Schema=new mongoose.Schema({
    patient_id:{
        type:'String'
    },
    patient_name:{
        type:'String'
    },
    rm_id:{
        type:'String'
    },
    rm_name:{
        type:'String'
    },
    date_assigned:{
        type:'String'
    },
    patient_details:[{
        condition:{
            type:'String'
        },
        seriousness:{
            type:'String'
        },
        detail_video:{
            type:'String'
        },
    }],
    status:{
        type:'String'
    },
    doctor_assigned_id:{
        type:'String'
    }
})
var patient_rm_Model=mongoose.model('patient_rm',patient_rm_Schema)
module.exports=patient_rm_Model