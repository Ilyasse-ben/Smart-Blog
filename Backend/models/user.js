const mongoose=require('mongoose')

const UserSchem=new mongoose.Schema({
    email:String,
    password:String
})


module.exports=mongoose.model("User",UserSchem)