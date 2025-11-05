const jwt=require('jsonwebtoken')

exports.generateAccessToken=(user)=>{
    const payload={sub:user.id,username:user.eamil}
    return jwt.sign(payload,"monSecretAccess123456",{expiresIn:'15m'})
}