var router=require('express').Router()
var generaldoctorController=require('../controllers/generaldoctor.controller')

router.post("/adddoctor/:id",generaldoctorController.addDoctor)
router.get("/getdoctor/:id",generaldoctorController.getDoctor)
router.post("/deletedoctor/:id",generaldoctorController.deleteDoctor)
router.post("/appointments/:id",generaldoctorController.viewAppointments)
router.post("/prescribe",generaldoctorController.prescribeTests)
module.exports=router