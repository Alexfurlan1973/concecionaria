const express = require('express')
const router = express.Router()
const path = require('path')
const uuid = require('uuid').v4

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file)
        const tiposPermitidos = ['image/jpeg', 'image/png']

        if (tiposPermitidos.includes(file.mimetype)) {
            cb(null, /*path.join(__dirname,*/ 'uploads')
        } else {
            cb('Só aceita imagem')
        }
    },
    filename: (req, file, cb) => {
        cb(null, `${uuid()}_${file.originalname}`)
    }
})
const upload = multer({
    storage
})

const cadastros = require('../controllers/cadastros')

router.get('/', cadastros.cadastros)
router.get('/carros', cadastros.cadastroCarros)
router.post('/carros', upload.single('imagem'), cadastros.cadastrarCarros)
router.get('/marcas', cadastros.cadastroMarcas)
router.post('/marcas', cadastros.cadastrarMarcas)
router.get('/cores', cadastros.cadastroCores)
router.post('/cores', cadastros.cadastrarCores)
router.get('/opcionais', cadastros.cadastroOpcionais)
router.post('/opcionais', cadastros.cadastrarOpcionais)
/*router.post('/upload', cadastros.cadastrarImagens);*/

module.exports = router;
