const express = require('express')
const router = express.Router()
const {signupNewUser} = require('../Controllers/signupController')

router.route('/').post(signupNewUser)

module.exports = router