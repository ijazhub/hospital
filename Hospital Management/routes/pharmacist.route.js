const router=require('express').Router()
const pharmacistController=require('../controllers/pharmacist.controller')

router.post("/add",pharmacistController.addPharmacist)
router.get("/get",pharmacistController.getPharmacist)
router.get("/get/:id",pharmacistController.getPharmacistById)
router.post("/delete/:id",pharmacistController.deletePharmacistById)
module.exports=router