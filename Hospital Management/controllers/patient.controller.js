var patientModel = require('../models/patient.schema')
var notificationModel = require('../models/notification.schema')
var appointmentModel=require('../models/appointment.schema')
var profileModel=require("../models/user.schema")
var diagnosticModel=require("../models/diagnostic_order.schema")
var pharmascistModel=require("../models/pharmacist.order.schema")
module.exports = {

    addInfo: async (req, res) => {

        let data = req.body

        let object = new patientModel(data)
        object = await object.save()

        await profileModel.findOneAndUpdate({username:req.params.username},{
            document_id:object._id
        })

        res.status(200).json({
            responseMessage: "Successfully Inserted",
            responseCode: 200
        })
    },

    editName: async (req, res) => {

        await patientModel.updateOne({
            _id: req.params.id
        },
            {
                name: req.body.name
            }
        )

        res.status(200).json({
            responseMessage: "Name Updated",
            responseCode: 200
        })
    },

    addToFamilyTree: async (req, res) => {

        await patientModel.updateOne({
            _id: req.params.id
        },
            {
                $push: {
                    family: {
                        first_name: req.body.first_name,
                        last_name:req.body.last_name,
                        number: req.body.number,
                        relation: req.body.relation,
                        email:req.body.email,
                        is_phone_verify:req.body.is_phone_verify
                    }
                }
            }

        )
        res.status(200).json({
            responseMessage: "Updated Family Tree",
            responseCode: 200
        })
    },

    viewFamilyTree: async (req, res) => {

        let user = await patientModel.findOne({ _id: req.params.id })

        if (user) {
            res.status(404).json({
                responseMessage: "User Not Found",
                responseCode: 404
            })
        }
        else {
            let data = user.family

            res.status(200).json({
                responseMessage: "Family Tree",
                responseCode: 200,
                data: data
            })
        }
    },

    getPatientById:async(req,res)=>{

        let data=await patientModel.findById(req.params.id)

        res.status(200).json({
            responseMessage:"Getting Patient Profile",
            data:data
        })
    },

    raiseRequest: async (req, res) => {

        let data = req.body

        let object = new notificationModel(data)
        object.save()

        res.status(200).json({
            responseMessage: "Request Submitted",
            responseCode: 200
        })
    },

    bookAppointment: async (req, res) => {

        let data = req.body

        var doctorModel = require('../models/generaldoctor.schema')

        let doctor = await doctorModel.findById(req.body.doctor_id)

        if (doctor.status === true) {

            //Payment Gateway

            let object = new appointmentModel(data)
            object.save()

            res.status(200).json({
                responseMessage: "Appointment Fixed",
                responseCode: 200
            })
        }
        else{
            res.status(200).json({
                responseMessage:"Doctor Not Available",
                responseCode:200
            })
        }
    },

    getReports:async(req,res)=>{

        let data=await diagnosticModel.find({patient_id:req.params.id})

        res.status(200).json({
            responseMessage:"Diagnostic Reports",
            data:data
        })
    },

    appointments:async(req,res)=>{

        let data=await appointmentModel.find({patient_id:req.params.id})

        res.status(200).json({
            responseMessage:"Appointments",
            data:data
        })
    },

    getMedication:async(req,res)=>{

        let data=await pharmascistModel.find({patient_id:req.params.id})

        res.status(200).json({
            responseMessage:"Medications",
            data:data
        })
    }
}