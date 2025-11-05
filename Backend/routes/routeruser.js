const usercontroller=require('../controller/controlerUser')
const expres=require('express')
const router=expres.Router()

router.post("/singUp",usercontroller.addUser);
router.post("/sing",usercontroller.getUser);

module.exports=router