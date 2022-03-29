const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const users = require('./routes/userRoutes')
const tickets = require('./routes/ticketRoutes')
const {connectDB} = require('./config/db')
const { errorHandler } =require('./middlewares/errorMiddleware')
const cors = require('cors')
connectDB()

const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({origin:"http://localhost:3000"}))
app.use('/api/users',users)
app.use('/api/ticket',tickets)
app.use(errorHandler)
// Serve Frontend
if (process.env.NODE_ENV === 'production') {
    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    // FIX: below code fixes app crashing on refresh in deployment
    app.get('*', (_, res) => {
      res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
    })
  } else {
    app.get('/', (req, res) => {
      res.status(200).json({ message: 'Welcome to the Support Desk API' })
    })
  }

app.listen(PORT,()=>{
    console.log("serevr is running")
})