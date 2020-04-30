var rmModel = require('../models/rm.schema')
var ambulanceModel = require('../models/ambulance.schema')
var patient_rmModel = require("../models/patient_rm.schema")
var diagnostic_orderModel = require("../models/diagnostic_order.schema")
var appointmentModel = require("../models/appointment.schema")
module.exports = {

    addRM: async (req, res) => {

        let data = {
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            address: req.body.address,
            city: req.body.city,
            dob: req.body.dob,
            age: req.body.age,
            yearsOfExperience: req.body.yearsOfExperience,
            gender: req.body.gender,
            qualification: req.body.qualification,
            language: req.body.language,
            location: req.body.location,
            status: req.body.status,
            create_date: req.body.create_date,
            update_date: req.body.update_date
        }

        let object = new rmModel(data)
        object = object.save()

        res.status(200).json({
            responseMessage: "Added RM Successfully",
            responseCode: 200
        })
    },

    getRM: async (req, res) => {

        let data = await rmModel.find()

        if (!data) {
            res.status(404).json({
                responseMessage: "No RM found",
                responseCode: 404
            })
        }

        else {
            res.status(200).json({
                data: data
            })
        }
    },

    getRMById: async (req, res) => {

        let data = await rmModel.findById(req.params.id)

        res.status(200).json({
            responseMessage: "Retrieved",
            responseCode: 200,
            data: data
        })
    },

    deleteRM: async (req, res) => {

        await rmModel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            responseMessage: "Deleted RM",
            responseCode: 200
        })
    },

    updateStatus: async (req, res) => {

        await rmModel.findOneAndUpdate({ _id: req.params.id }, {
            status: false
        })

    },

    //RM assigned to pick up patient from Home on Ambulance

    ambulanceBookByRm: async (req, res) => {

        let notifications = req.params.id

        let ambulance = await ambulanceModel.findOne({ status: true })

        let data = {
            patient_id: notifications.patient_id,
            ambulance_id: ambulance._id,
            rm_id: req.params.id
        }

        let object = new ambulance_patientModel(data)
        await object.save()

        res.status(200).json({
            responseMessage: "Ambulance Booked",
        })
    },

    //Visting patient by RM and doing all the task to assign doctor and upload sample of condition

    visitPatientByRm: async (req, res) => {

        let data = req.body

        let object = new patient_rmModel(data)
        await object.save()

        res.status(200).json({
            responseMessage: "Doctor Booked"
        })
    },

    //Patients under a particular RM

    patientsUnderRm: async (req, res) => {

        let data = await appointmentModel.find({ rm_id: req.params.id })

        res.status(200).json({
            responseMessage: "Retrieved Appointments",
            data: data
        })
    },

    //Active Tests of Patient

    testsOfPatient: async (req, res) => {

        let data = await diagnostic_orderModel.find({ patient_id: req.body.patient_id, is_test_done: false })

        res.status(200).json({
            responseMessage: "Retrieved Tests",
            data: data
        })
    },

    //Visiting the Patient and collecting sample

    sampleCollection: async (req, res) => {

        let diagnostic = await diagnostic_orderModel.findById(req.params.id)

        let data = {
            appointment_id: diagnostic.appointment_id,
            patient_id: diagnostic.patient_id,
            patient_name: diagnostic.patient_name,
            doctor_id: diagnostic.doctor_id,
            doctor_name: diagnostic.doctor_name,
            diagnostic_id: diagnostic.diagnostic_id,
            diagnostic_name: diagnostic.diagnostic_name,
            location: req.body.location,
            home_pickup_time: req.body.home_pickup_time,
            diagnostic_drop_datetime: req.body.diagnostic_drop_datetime,
            diagnostic_pickup_datetime: req.body.diagnostic_pickup_datetime,
            home_drop_datetime: req.body.home_drop_datetime,
            is_sample_collect_done:req.body.is_sample_collect_done,
            sample_collection_details:req.body.sample_collection_details,
            rm_id:req.body.rm_id

        }

        let object = new rm_diagnostic_patientModel(data)
        await object.save()

        res.status(200).json({
            responseMessage:"Diagnostic Updated",
        })
    },
}