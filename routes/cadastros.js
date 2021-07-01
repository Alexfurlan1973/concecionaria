const express = require('express');
const router = express.Router();

const cadastros = require('../controllers/cadastros');

router.get('/', cadastros.cadastros);
router.get('/carros', cadastros.cadastroCarros);
router.get('/marcas', cadastros.cadastroMarcas);
router.get('/cores', cadastros.cadastroCores);
router.get('/opcionais', cadastros.cadastroOpcionais);

module.exports = router;
