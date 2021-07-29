const express = require('express');
const router = express.Router();

const loginCadastro = require('../controllers/loginCadastro');

router.get('/cadastro', loginCadastro.paginaCadastro);
router.get('/login', loginCadastro.paginaLogin);
router.post('/cadastro', loginCadastro.cadastrar);
router.post('/login', loginCadastro.login);

module.exports = router;
