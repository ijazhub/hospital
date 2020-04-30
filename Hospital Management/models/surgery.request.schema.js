const mongoose=require('mongoose')
var surgery_requestSchema=new mongoose.Schema({
    appointment_id:{
        type:'String'
    },
    patient_id:{
        type:'String'
    },
    patient_name:{
        type:'String'
    },
    doctor_id:{
        type:'String'
    },
    doctor_name:{
        type:'String'
    },
    rm_id:{
        type:'String'
    },
    disease:{

    },
    status:{
        type:Boolean,default:false
    }
})
var surgery_requestModel=mongoose.model("surgery_request",surgery_requestSchema)
module.exports=surgery_requestModel