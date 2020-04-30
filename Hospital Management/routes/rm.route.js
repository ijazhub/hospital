var router=require('express').Router()
var rmController=require('../controllers/rm.controller')

router.post("/addRM",rmController.addRM)
router.get("/getRM",rmController.getRM)
router.post("/deleteRM/:username",rmController.deleteRM)
module.exports=router