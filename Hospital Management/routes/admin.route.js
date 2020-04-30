var router=require('express').Router()
var adminController=require('../controllers/admin.controller')

router.post("/assign/:id",adminController.assigningRM)
router.get("/viewappointment",adminController.viewAppointments)
router.get("/getrm",adminController.listOfAvailableRM)
module.exports=router