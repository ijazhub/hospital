var appointmentModel=require('../models/appointment.schema')
var rmModel=require('../models/rm.schema')
module.exports={

    viewAppointments:async(req,res)=>{

        let appointments=await appointmentModel.find({
            status:true
        })

        res.status(200).json({
            responseMessage:"Retrieved",
            data:appointments
        })
    },


    listOfAvailableRM:async(req,res)=>{

        let rmList=await rmModel.find({status:true})

        res.status(200).json({
            responseMessage:"Retrieved",
            data:rmList
        })
    },

    assigningRM:async(req,res)=>{

        await appointmentModel.findByIdAndUpdate(req.params.id,{
            rm_id:req.body.rm_id
        })

        await rmModel.findByIdAndUpdate(req.body.rm_id,{
            status:false
        })

        res.status(200).json({
            responseMessage:"RM assigned",
        })
    }
}