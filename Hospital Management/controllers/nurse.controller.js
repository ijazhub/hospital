const nurseModel = require('../models/nurse.schema')
module.exports = {

    addNurse: async (req, res) => {

        let data=req.body

        let object=new nurseModel(data)
        await object.save()

        res.status(200).json({
            responseMessage:"Successfully Inserted",
            responseCode:200
        })
    },

    getNurse:async(req,res)=>{

        let data=await nurseModel.find()

        res.status(200).json({
            responseMessage:"Retrieved",
            responseCode:200,
            data:data
        })
    },

    getNurseById:async(req,res)=>{

        let data=await nurseModel.findById(req.params.id)

        res.status(200).json({
            responseMessage:"Retrieved",
            responseCode:200,
            data:data
        })
    },

    deleteNurseById:async(req,res)=>{

        await nurseModel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            responseMessage:"Deleted Successfully",
            responseCode:200
        })
    },

    //Nurse Duty in OR
    dutyInOr:async(req,res)=>{

        let data=req.body

        

        res.status(200).json({
            responseMessage: "Medicnines Prescribed",
        })
    }
}