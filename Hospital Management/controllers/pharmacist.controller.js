const pharmacistModel=require('../models/pharmacist.schema')
module.exports={

    addPharmacist:async(req,res)=>{

        let data=req.body.data

        let object=new pharmacistModel(data)
        await object.save()

        res.status(200).json({
            responseMessage:"Successfully Inserted",
            responseCode:200
        })
    },

    getPharmacist:async(req,res)=>{

        let data=await pharmacistModel.find()

        res.status(200).json({
            responseMessage:"Retrieved",
            responseCode:200,
            data:data
        })
    },

    getPharmacistById:async(req,res)=>{

        let data=await pharmacistModel.findById(req.params.id)

        res.status(200).json({
            responseMessage:"Retrieved",
            responseCode:200,
            data:data
        })
    },

    deletePharmacistById:async(req,res)=>{

        await pharmacistModel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            responseMessage:"Deleted Successfully",
            responseCode:200
        })
    }
}