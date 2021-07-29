const express = require('express');
const router = express.Router();

const loginCadastro = require('../controllers/loginCadastro');

router.get('/', loginCadastro.loginCadastro);
router.post('/', loginCadastro.cadastrar);
router.post('/loginCadastro', loginCadastro.login);

module.exports = router;
