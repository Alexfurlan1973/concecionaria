const express = require('express');
const router = express.Router();

const loginCadastro = require('../controllers/loginCadastro');

router.get('/', loginCadastro.loginCadastro);

module.exports = router;
