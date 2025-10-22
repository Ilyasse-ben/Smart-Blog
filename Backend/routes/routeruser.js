const usercontroller=require('../controller/controlerUser')
const expres=require('express')
const router=expres.Router()

router.post("/singUp",usercontroller.addUser);
router.get("/sing",usercontroller.ok);

module.exports=router