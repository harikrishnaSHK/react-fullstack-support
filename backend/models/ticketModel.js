const { status } = require('express/lib/response')
const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

const ticketSchema = mongoose.Schema({

user:{

type:mongoose.Schema.Types.ObjectId,
ref:'User',
required:true

}
,
description:{

type:String,
required:[true,"Plesae add the description of ticket"]

},

status:{

    type:String,
    enum : ['new','Pending','close'],
    default:'new',
    required:true


}

},
{timestamps:true}
)


module.exports  =mongoose.model('Ticket',ticketSchema)