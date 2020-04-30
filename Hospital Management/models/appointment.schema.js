const mongoose=require('mongoose')
var appointmentSchema=new mongoose.Schema({
    patient_id:{
        type:'String'
    },
    doctor_id:{
        type:'String'
    },
    timeOfAppointment:{
        type:'String'
    },
    status:{
        type:Boolean,default:false
    },
    rm_id:{
        type:'String'
    }
})
var appointmentModel=mongoose.model('appointment',appointmentSchema)
module.exports=appointmentModel