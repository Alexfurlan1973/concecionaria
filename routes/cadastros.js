const express = require('express')
const router = express.Router()
const checkSession = require('../middlewares/checkSession')
const multer = require('multer')
const multerConfig = require('../config/multer')

const cadastros = require('../controllers/cadastros')

router.get('/', checkSession, cadastros.cadastros)
router.get('/carros', checkSession, cadastros.cadastroCarros)
router.post('/carros', checkSession, multer(multerConfig).array('imagem'), cadastros.cadastrarCarros)
router.get('/marcas', checkSession, cadastros.cadastroMarcas)
router.post('/marcas', checkSession, cadastros.cadastrarMarcas)
router.get('/cores', checkSession, cadastros.cadastroCores)
router.post('/cores', checkSession, cadastros.cadastrarCores)

module.exports = router;
