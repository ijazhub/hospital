var router=require('express').Router()
var patientrouter=require('../controllers/patient.controller')

router.post("/add",patientrouter.addInfo)
router.post("/editname/:id",patientrouter.editName)
router.post("/addfamily/:id",patientrouter.addToFamilyTree)
router.post("/viewfamily/:id",patientrouter.viewFamilyTree)
router.post("/appointment",patientrouter.bookAppointment)
module.exports=router