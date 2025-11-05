const users=require('../models/user')
const tokenService=require('../servece/tokenServece')
const bcrypt = require('bcryptjs');

function contientNombresEtLettres(chaine) {
  const aDesLettres = /[a-zA-Z]/.test(chaine);
  const aDesChiffres = /\d/.test(chaine);
  return aDesLettres && aDesChiffres;
}

exports.addUser=async (req,res)=>{
    const{email,password,name}=req.body
    const user=await users.find({'email':email})
    if(user.length){
        res.send({"message":"this yoser existed"})
    }else{
        console.log(!contientNombresEtLettres(password))
        if(password.length<8 || contientNombresEtLettres(password)==false){
            res.send({"message":"password doit contient 8 au moin entre les carctire et les nombre"})
        }else{
            const password_hash=await bcrypt.hash(password,10)
            const newuser= new users({email:email,password:password_hash})
            const rspance=newuser.save()
            res.send({"message":newuser.email})
        }
    }
}
exports.getUser=async (req,res)=>{
    const{email,password}=req.body
    const finduser=await users.findOne({'email':email})
    console.log(finduser.length>0)
    if(await bcrypt.compare(password,finduser.password)){
        const token = tokenService.generateAccessToken(finduser);
            res.json({ message: 'Connexion réussie', accessToken: token });
    }
        
    res.send({"message":"email or password incorcte"});

}

