const express = require('express')
const router = express.Router()
const {loginExistingUser} = require('../Controllers/loginController')

router.route('/').post(loginExistingUser)


module.exports = router