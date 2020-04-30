var generalDoctorModel = require('../models/generaldoctor.schema')
var patientModel=require('../models/patient.schema')
var appointmentModel = require('../models/appointment.schema')
var diagnosticModel=require("../models/diagnostic.schema")
var diagnostic_orderModel = require('../models/diagnostic_order.schema')
var testModel = require('../models/available_tests.schema')
var profileModel=require("../models/user.schema")
var surgery_request=require("../models/surgery.request.schema")
module.exports = {

    addDoctor: async (req, res) => {

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
            designation: req.body.designation,
            speciality: req.body.speciality,
            qualification: req.body.qualification,
            language: req.body.language,
            status: req.body.status,
            create_date: req.body.create_date,
            update_date: req.body.update_date
        }

        let object = new generalDoctorModel(data)
        await object.save()

        await profileModel.findOneAndUpdate({_id:req.params.id},{
            document_id:object._id
        })

        res.status(200).json({
            responseMessage: "Successfully Inserted",
            responseCode: 200
        })
    },

    getDoctor: async (req, res) => {

        let data = await generalDoctorModel.findById(req.params.id)

        res.status(200).json({
            responseMessage: "Retrieved",
            responseCode: 200,
            data: data
        })
    },

    updateDoctor: async (req, res) => {

        await generalDoctorModel.findByIdAndUpdate({ _id: req.params.id }, {

        })
    },

    deleteDoctor: async (req, res) => {

        await generalDoctorModel.findByIdAndDelete(req.params.id)

        res.status(200).json({
            responseMessage: "Deleted Succesfully",
            responseCode: 200
        })
    },

    //Viewing Doctors Appointments
    viewAppointments: async (req, res) => {

        let appointment = await appointmentModel.find({ doctor_id: req.params.id })

        let fixedAppointments = appointment.map(a => a).filter(f => f.status === true)

        res.status(200).json({
            responseMessage: "Appointments",
            data: fixedAppointments
        })
    },

    //Prescribing Tests to Patient
    prescribeTests: async (req, res) => {

        let doctor = await generalDoctorModel.findById(req.body.doctor_id)
        let patient=await patientModel.findById(req.body.patient_id)
        let diagnostic=await diagnosticModel.findById(req.body.diagnostic_id)

        let data={
            diagnostic_id:req.body.diagnostic_id,
            diagnostic_name:diagnostic.diagnostic_name,
            patient_id:req.body.patient_id,
            patient_name:patient.first_name,
            appointment_id:req.body.appointment_id,
            doctor_id:req.body.doctor_id,
            doctor_name:doctor.first_name,
            test:req.body.test,
            disease:req.body.disease
        }

        let object = new diagnostic_orderModel(data)

        await object.save()

        res.status(200).json({
            responseMessage: "Tests Prescribed",
        })
    },

    //Prescribing Medicines
    prescribeMedicine:async(req,res)=>{

        let data=req.body

        let object=new medicine_prescribe(data)
        await object.save()

        res.status(200).json({
            responseMessage: "Medicnines Prescribed",
        })
    },

    //Consult for Surgery shall reach superadmin who will give permission
    surgeryRequest:async(req,res)=>{

        let data=req.body

        let object=new surgery_request(data)
        await object.save()

        res.status(200).json({
            responseMessage: "Surgery Request Raised",
        })
    }
}