const router=require('express').Router()
const nutritionistController=require('../controllers/nutritionist.controller')

router.post("/add",nutritionistController.addnutritionist)
router.get("/get",nutritionistController.getnutritionist)
router.get("/get/:id",nutritionistController.getnutritionistById)
router.post("/delete/:id",nutritionistController.deletenutritionistById)
module.exports=router