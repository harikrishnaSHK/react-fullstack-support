const asynHnadler = require('express-async-handler')
const User = require('../models/usersModel')
const Ticket =require('../models/ticketModel')
const { findById } = require('../models/ticketModel')

const createTicket =  asynHnadler(async(req,res)=>{

   console.log("coming in controller") 

const {description} = req.body
console.log(description) 


if(!description){

    res.status(400)
    throw new Error("Please add the product description")
}

const id = req.user.id

const user = await User.findById(id)

console.log(user)

if(!user){

    res.status(401)
    throw new Error("User not Found")
}


const ticket = await Ticket.create({
description,
user:req.user.id,
statu:'new'
})


res.status(200)
.json(ticket)


})


const getTickets = asynHnadler(async(req,res)=>{

    const id = req.user.id
    const user = await User.findById(id)


    if(!User){

res.status(401)
throw new Error("User not found")

    }


    const ticket  = await Ticket.find({user:req.user.id})

    res.status(200)
    .json(ticket)

})

const getTicket = asynHnadler(async(req,res)=>{

const id= req.user.id

const user = await User.findById(id)


if(!user){

res.status(401)
throw new Error("User not exist")

}

const ticket  =  await Ticket.findById(req.params.id)

if(ticket.user.toString()!== req.user.id){
 res.status(401)
 throw new Error("Not authorized")

}

res.status(200)
.json(ticket)

})

const updateTicket = asynHnadler(async(req,res)=>{

const id = req.user.id
const user = await User.findById(id)

if(!user){

res.status(401)
throw new Error("Not Authorized")

}

const ticket  = await Ticket.findByIdAndUpdate(req.params.id,req.body,{new:true}) 

if(!ticket){

res.status(404)
throw new Error("Ticket not Found")

}

if(ticket.user.toString()!==req.user.id){

res.status(401)
throw new Error("Not Authorized")

}

res.status(200)
.json(ticket)


})

module.exports ={createTicket,getTickets,getTicket,updateTicket}