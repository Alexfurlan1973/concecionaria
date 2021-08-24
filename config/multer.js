const path = require('path')
const uuid = require('uuid').v4
const multer = require('multer')

module.exports = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            const tiposPermitidos = ['image/jpeg', 'image/png']

            if (tiposPermitidos.includes(file.mimetype)) {
                cb(null, 'uploads')
            } else {
                cb('Só aceita imagem')
            }
        },
        filename: (req, file, cb) => {
            cb(null, `${uuid()}-${file.originalname}`)
        }
    })
}