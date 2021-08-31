const models = require('../models')
const { Op } = require('sequelize')

module.exports.cadastros = (req, res) => {
    res.render('cadastros', {
        title: 'Pagina de Cadastros',
        pagina: 'cadastros',
        user: req.session.usuario,
    });
}

module.exports.cadastroCarros = (async (req, res) => {

    const buscaMarcas = await models.Marcas.findAll()
    const buscaCores = await models.Cores.findAll()

    res.render('cadastroCarros', {
        title: 'Cadastro de Carros',
        pagina: 'cadastroCarros',
        user: req.session.usuario,
        error: {},
        content: {},
        buscaMarcas,
        buscaCores,
    })
})

module.exports.cadastrarImg = (async (req, res) => {
    const urlImg = await models.urlImagens.findAll()
    const caminho = req.file.path



    await models.urlImagens.create(caminho)
    res.redirect('/cadastros/carros');
    return
})

module.exports.cadastrarCarros = (async (req, res) => {
    const veiculo = req.body
    const foundCarro = await models.Veiculos.findOne().then(function(Veiculos) {
    })
    const buscaMarcas = await models.Marcas.findAll()
    const buscaCores = await models.Cores.findAll()
/*console.log(foundCarro)*/
    if (!veiculo.carro || !veiculo.cambio || !veiculo.ano || !veiculo.km || !veiculo.motor) {
        res.render('cadastroCarros', {
            error: {
                descricao: 'Faltou preencher algum campo.',
            },
            content: req.body,
            title: 'Cadastro de Carros',
            buscaMarcas,
            buscaCores,
        })
        return
    }

    if (foundCarro) {
        res.render('cadastroCarros', {
            error: {
                carro: 'Carro já cadastrado',
            },
            content: req.body,
            title: 'Cadastro de Carros',
            buscaMarcas,
            buscaCores,
        })
        return
    }

    const carros = {
        idAdmin: req.session.usuario.idAdmin,
        ...req.body,
    }

    await models.Veiculos.create(carros)
    res.redirect('/cadastros/');
    return
})

module.exports.cadastroMarcas = (req, res) => {
    res.render('cadastroMarcas', {
        title: 'Cadastro de Marcas',
        pagina: 'cadastroMarcas',
        user: req.session.usuario,
        error: {},
        content: {},
    })
}

module.exports.cadastrarMarcas = (async (req, res) => {
    const marcaCarro = req.body.nomeDaMarca
    const foundMarca = await models.Marcas.findOne({
        where: {
            marca: req.body.nomeDaMarca
        }
    })

    if (!marcaCarro) {
        res.render('cadastroMarcas', {
            error: {
                nomeDaMarca: 'Faltou preencher o nome da Marca.',
            },
            content: req.body,
            title: 'Cadastro de Marcas',
        })
        return
    }

    if (foundMarca) {
        res.render('cadastroMarcas', {
            error: {
                nomeDaMarca: 'Marca já cadastrada',
            },
            content: req.body,
            title: 'Cadastro de Marcas',
        })
        return
    }

    const marca = {
        marca: req.body.nomeDaMarca
    }

    await models.Marcas.create(marca)
    res.redirect('/cadastros/marcas');
    return
})

module.exports.cadastroCores = (req, res) => {
    res.render('cadastroCores', {
        title: 'Cadastro de Cores',
        pagina: 'cadastroCores',
        user: req.session.usuario,
        error: {},
        content: {},
    })
}

module.exports.cadastrarCores = (async (req, res) => {
    const nomeDaCor = req.body.nomeDaCor
    const foundCor = await models.Cores.findOne({
        where: {
            cor: req.body.nomeDaCor
        }
    })

    if (!nomeDaCor) {
        res.render('cadastroCores', {
            error: {
                nomeDaCor: 'Faltou preencher o nome da Cor.',
            },
            content: req.body,
            title: 'Cadastro de Cores',
        })
        return
    }

    if (foundCor) {
        res.render('cadastroCores', {
            error: {
                nomeDaCor: 'Cor já cadastrada',
            },
            content: req.body,
            title: 'Cadastro de Cores',
        })
        return
    }

    const cor = {
        cor: req.body.nomeDaCor
    }

    await models.Cores.create(cor)
    res.redirect('/cadastros/cores');
    return
})
