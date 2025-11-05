const express=require('express');
const app=express()

const mongosse=require('mongoose')
const routerUser=require('./routes/routeruser')
// connextion to data basse 
mongosse.connect("mongodb://127.0.0.1:27017/Blog")
.then(console.log("connextion sucssufly"))
.catch((err)=>{console.log("he has a errore :"+e)})

// les router
app.use(express.json())


app.use("/",routerUser)

app.listen(3000,()=>{console.log("i'am listen in the the: http:localhost:3000")});