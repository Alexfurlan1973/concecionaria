const { UnorderedCollection } = require("http-errors");
const models = require('../models')
const { Op } = require('sequelize')

module.exports.index = (async (req, res) => {
    const carros = await models.Veiculos.findAll()
    
    res.render('index', {
        carros: carros,
        title: 'Loja de Carros',
        pagina: 'index'
    });
})

module.exports.exibeVeiculo = (async (req, res) => {
    const id = req.params.id
    const resultados = await models.Veiculos.findAll()

    
    
    res.render('detalhes', { 
    resultados,
    id,
 })
})
