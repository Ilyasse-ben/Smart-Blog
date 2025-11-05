const mongoose=require('mongoose')

const UserSchem=new mongoose.Schema({
    email:String,
    password:String,
    name:String
})


module.exports=mongoose.model("User",UserSchem)