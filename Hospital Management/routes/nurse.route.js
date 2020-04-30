const router=require('express').Router()
const nurseController=require('../controllers/nurse.controller')

router.post("/add",nurseController.addNurse)
router.get("/get",nurseController.getNurse)
router.get("/get/:id",nurseController.getNurseById)
router.post("/delete/:id",nurseController.deleteNurseById)
module.exports=router