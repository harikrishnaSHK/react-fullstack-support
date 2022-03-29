const express = require('express')
const router = express.Router()
const {createTicket,getTickets,getTicket,updateTicket} = require('../controllers/ticketController')
const { protect} = require('../middlewares/authMiddleware')

router.route('/').post(protect,createTicket)
router.route('/').get(protect,getTickets)
router.route('/:id').get(protect,getTicket).put(protect,updateTicket)


module.exports = router