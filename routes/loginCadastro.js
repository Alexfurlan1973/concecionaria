const express = require('express');
const router = express.Router();

const loginCadastro = require('../controllers/loginCadastro');

router.get('/cadastro', loginCadastro.paginaCadastro);
router.get('/login', loginCadastro.paginaLogin);
router.post('/cadastro', loginCadastro.criarAdmin);
router.post('/login', loginCadastro.login);
router.get('/logoff', loginCadastro.paginaLogoff);
router.post('/logoff', loginCadastro.logoff);

module.exports = router;
