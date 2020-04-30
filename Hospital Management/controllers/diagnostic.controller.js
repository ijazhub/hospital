var diagnosticModel=require('../models/diagnostic.schema')
var diagnostic_orderModel=require('../models/diagnostic_order.schema')
var testModel=require('../models/available_tests.schema')
module.exports={

    addDiagnostic:async(req,res)=>{

        let data=req.body

        let object=new diagnosticModel(data)
        await object.save()

        res.status(200).json({
            responseMessage:"Successfully Inserted",
            responseCode:200
        })
    },

    getDiagnostic:async(req,res)=>{
        let data=await diagnosticModel.find()

        res.status(200).json({
            responseMessage:"Retrieved",
            responseCode:200,
            data:data
        })
    },

    getDiagnosticById:async(req,res)=>{

        let data=await diagnosticModel.findById(req.params.id)

        res.status(200).json({
            responseMessage:"Retrieved",
            responseCode:200, 
            data:data
        })
    },

    updateDiagnostic:async(req,res)=>{

        await diagnosticModel.findByIdAndUpdate(req.params.id,{

        })
    },

    deleteDiagnostic:async(req,res)=>{

        await diagnosticModel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            responseMessage:"Deleted Succesfully",
            responseCode:200
        })
    },

    getPendingTests:async(req,res)=>{

        let tests=await diagnostic_orderModel.find({is_test_done:false})

        res.status(200).json({
            responseMessage:"Pending Tests",
            data:tests
        })
    },

    getActiveTestsOfPatient:async(req,res)=>{

        let tests=await diagnostic_orderModel.find({patient_id:req.params.id,status:true})

        res.status(200).json({
            responseMessage:"Active Tests",
            data:tests
        })

    },

    getTestsOfPatient:async(req,res)=>{

        let tests=await diagnostic_orderModel.findOne({patient_id:req.params.patient_id})

        res.status(200).json({
            responseMessage:"Tests of Patient",
            data:tests
        })
    },

    //Upload Report File of Tests


    updateStatusOfTest:async(req,res)=>{

        await diagnostic_orderModel.findById(req.params.id,{
            status:req.body.status
        })
    },

    //Adding Tests
    addTests:async(req,res)=>{

        let data=req.body

        let object=new testModel(data)
        await object.save()

        res.status(200).json({
            responseMessage:'Added Test',
        })
    },

    getTests:async(req,res)=>{

        let data=await testModel.find()

        res.status(200).json({
            responseMessage:'Retrieved Test',
            data:data
        })
    },

    getTestsById:async(req,res)=>{

        let data=await testModel.findById(req.params.id)

        res.status(200).json({
            responseMessage:'Retrieved Test',
            data:data
        })
    },

    updateTest:async(req,res)=>{

        await testModel.findOneAndUpdate({_id:req.params.id},{
            testName:req.body.testName,
            price:req.body.price
        })

        res.status(200).json({
            responseMessage:'Updated Test',
        })
    },

    deleteTest:async(req,res)=>{

        await testModel.findOneAndDelete({_id:req.params.id})

        res.status(200).json({
            responseMessage:'Deleted Test',
        })
    }
}