const users=require('../models/user')

exports.addUser=async (req,res)=>{
    const{email,password}=req.body
    const user=await users.find({'email':email})
    if(user.length){
        res.send({"message":"this yoser existed"})
    }else{
        if(password.length<8){
            res.send({"message":"password doit contient 8 carctire au moin"})
        }else{
            const newuser= new users({email:email,password:password})
            const rspance=newuser.save()
            res.send({"message":rspance})
        }
    }
}
exports.ok=async (req,res)=>{
    res.send("ok")
}