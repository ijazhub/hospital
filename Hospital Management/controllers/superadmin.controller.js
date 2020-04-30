var surgery_appointmentModel=require("../models/surgery.appointment.schema")
var surgery_requestModel=require("../models/surgery.request.schema")

module.exports={

    //View Surgeries
    getSurgeries:async(req,res)=>{

        let data=await surgery_requestModel.find()

        res.status(200).json({
            responseMessage:"Getting Surgeries",
            data:data
        })
    },

    //View Surgery of Patient
    getSurgery:async(req,res)=>{

        let data=await surgery_requestModel.find({patient_id:req.params.id})

        res.status(200).json({
            responseMessage:"Getting Surgery of Patient",
            data:data
        })
    },

    //Appointing and Approving Surgery
    approvingSurgery:async(req,res)=>{

        let data=req.body

        let object=new surgery_appointmentModel(data)
        await object.save()

        res.status(200).json({
            responseMessage:"Surgery Approved"
        })
    }
}