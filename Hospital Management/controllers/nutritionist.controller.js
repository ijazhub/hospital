const nutritionistModel = require('../models/Nutritionist.schema')
var nutritionistAppointmentModel=require('../models/nutritionist_appointment.schema')
module.exports = {

    addNutritionist: async (req, res) => {

        let data = req.body

        let object=new nutritionistModel(data)
        await object.save()

        res.status(200).json({
            responseMessage:"Successfully Inserted",
            responseCode:200
        })
    },

    getNutritionist:async(req,res)=>{

        let data=await nutritionistModel.find()

        res.status(200).json({
            responseMessage:"Retrieved",
            responseCode:200,
            data:data
        })
    },

    getNutritionistById:async(req,res)=>{

        let data=await nutritionistModel.findById(req.params.id)

        res.status(200).json({
            responseMessage:"Retrieved",
            responseCode:200,
            data:data
        })
    },

    deleteNutritionistById:async(req,res)=>{

        await nutritionistModel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            responseMessage:"Deleted Successfully",
            responseCode:200
        })
    },

    appointmentPatient:async(req,res)=>{

        let data=req.body

        let object=new nutritionistAppointmentModel(data)

        await object.save()

        res.status(200).json({
            responseMessage:"Added",
        })
    }
}