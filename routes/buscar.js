const express = require('express');
const router = express.Router();

const buscar = require('../controllers/buscarCarro');

router.get('/', buscar.buscarCarro);

module.exports = router;
