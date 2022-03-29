const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUsers = asyncHandler(async (req,res)=>{


const {name,email,password} = req.body    
if(!name || !email || !password){

res.status(400)
throw new Error("enter all the deatils")

}

const userExists = await User.findOne({email})

if(userExists){

res.status(400)
throw new Error("user already exists")

}


const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password,salt)

const user = await User.create({

name,
email,
password:hashedPassword

})


if(user){

res.status(201)
 .json({

  _id:user._id,
  name:user.name,
  email:user.email,
  token:generateToken(user._id)


 })

}

else{

res.status(400)
throw new Error("Invalid error")

}

}
)

const loginUsers = asyncHandler(async (req,res)=>{

const {email,password} = req.body
const user = await User.findOne({email})

if(!user){
    res.status(400)
    throw new Error("Invalid user")
}
const pass = await bcrypt.compare(password,user.password)

if(user && pass){
res.status(200)
.json({

    _id:user._id,
    name:user.name,
    email:user.email,
    token:generateToken(user._id)


})


}

else{


res.status(401)
throw new Error("Invalid Credentials")

}

    }

)


const generateToken = (id)=>{

    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"30d"
    })


}


const getMe= asyncHandler(async(req,res)=>{

const user = {

    id:req.user._id,
    name:req.user.name,
    email:req.user.email
}

res.status(200)
.json(user)



})
module.exports = {registerUsers,loginUsers,getMe}
