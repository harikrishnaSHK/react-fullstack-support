const User = require('../models/usersModel')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const protect  = asyncHandler(async(req,res,next)=>{
let token

if(req.headers.authorization){


try{
token = req.headers.authorization.split(' ')[1]
const decoded = jwt.verify(token,process.env.JWT_SECRET)
req.user = await User.findById(decoded.id)


next()


}
catch(err){

 res.status(401)
 throw new Error("Not Authorized")

}

}

else{

res.status(401)
throw new Error("not authorized")

}



})

module.exports = {protect}