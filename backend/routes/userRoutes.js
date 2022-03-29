const express = require('express')
const router  = express.Router()
const {protect} = require('../middlewares/authMiddleware')
const { registerUsers ,loginUsers,getMe} = require('../controllers/usersController')

router.route('/register').post(registerUsers)
router.route('/login').post(loginUsers)
router.route('/getme').get(protect, getMe)
module.exports = router