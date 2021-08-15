const models = require('../models')

module.exports.criarAdmin = (async (req, res) => {
    const admin = req.body
    await models.Administrador.create(admin)
    res.send(201)
})