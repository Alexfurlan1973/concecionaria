const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')

router.post('/teste', adminController.criarAdmin)

module.exports = router
