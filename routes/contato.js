const express = require('express');
const router = express.Router();

const contato = require('../controllers/contato');

router.get('/', contato.contato);

module.exports = router;
