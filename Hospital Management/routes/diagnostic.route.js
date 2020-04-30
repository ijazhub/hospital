const router=require('express').Router()
const diagnosticController=require('../controllers/diagnostic.controller')

router.post("/add",diagnosticController.addDiagnostic)
router.get("/get",diagnosticController.getDiagnostic)
router.get("/get/:id",diagnosticController.getDiagnosticById)
// router.post("/delete/:id",diagnosticController.deleteDiagnosticById)
router.post("/addtest",diagnosticController.addTests)
router.post("/gettestpatient/:id",diagnosticController.getTestsOfPatient)
router.post("/getactivetest/:id",diagnosticController.getActiveTestsOfPatient)
router.post("/getpendingtest",diagnosticController.getPendingTests)
module.exports=router