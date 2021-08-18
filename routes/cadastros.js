const express = require('express');
const router = express.Router();

const cadastros = require('../controllers/cadastros');

router.get('/', cadastros.cadastros);
router.get('/carros', cadastros.cadastroCarros);
/*router.post('/carros', cadastros.cadastrarCarros);*/
router.get('/marcas', cadastros.cadastroMarcas);
router.post('/marcas', cadastros.cadastrarMarcas);
router.get('/cores', cadastros.cadastroCores);
router.post('/cores', cadastros.cadastrarCores);
router.get('/opcionais', cadastros.cadastroOpcionais);
router.post('/opcionais', cadastros.cadastrarOpcionais);

module.exports = router;
