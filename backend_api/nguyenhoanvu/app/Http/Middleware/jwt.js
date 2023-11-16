const jwt= require('jsonwebtoken')

const generateAccessToken=(id,role)=>jwt.sign({_id:id,role},process.env.JWT_SECRET,{expiresIn:'3d'})
module.exports={
    generateAccessToken
}