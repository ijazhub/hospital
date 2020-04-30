var router=require('express').Router()
var profilecontroller=require('../controllers/profile.controller')

router.post("/signup",profilecontroller.signup)
router.post("/signin",profilecontroller.signin)
router.post("/logout",profilecontroller.logout)
router.post("/logoutAll",profilecontroller.logoutAll)
router.post("/sendmail",profilecontroller.sendMailResetPassword)
router.post("/reset",profilecontroller.resetPassword)
module.exports=router;