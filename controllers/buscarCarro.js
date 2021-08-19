const models = require('../models')
const { Op } = require('sequelize')

module.exports.buscarCarro = (async (req, res) => {
    const { carro } = req.query

    const resultados = await models.Veiculos.findAll({
        where: {
            carro: {
                [Op.like]: `${carro}%`
            }
        }
    })

    res.render('resultadoBusca', { resultados })
    return
})
