const models = require('../models')
const { Op } = require('sequelize')
const uuid = require('uuid').v4

const multer = require('multer')

/*const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file)
        const tiposPermitidos = ['image/jpeg', 'image/png']

        if (tiposPermitidos.includes(file.mimetype)) {
            cb(null, path.join(__dirname, 'uploads'))
        } else {
            cb('Só aceita imagem')
        }
    },
    filename: (req, file, cb) => {
        cb(null, `${uuid()}_${file.originalname}`)
    }
})
const upload = multer({
    storage: 'storage'
})*/

module.exports.cadastros = (req, res) => {
    res.render('cadastros', {
        title: 'Pagina de Cadastros',
        pagina: 'cadastros',
        user: req.session.usuario,
    });
}

module.exports.cadastroCarros = (async (req, res) => {

    const buscaOpcionais = await models.Opcionais.findAll()
    const buscaMarcas = await models.Marcas.findAll()
    const buscaCores = await models.Cores.findAll()

    res.render('cadastroCarros', {
        title: 'Cadastro de Carros',
        pagina: 'cadastroCarros',
        user: req.session.usuario,
        error: {},
        content: {},
        buscaOpcionais,
        buscaMarcas,
        buscaCores,
    })
})

module.exports.cadastrarImg = (async (req, res) => {
    const urlImg = await models.urlImagens.findAll()
    const caminho = req.file.path
    console.log(caminho)
    urlImg.url = caminho

    await models.urlImagens.create(urlImg)
    res.redirect('/cadastros/carros');
    return
})

module.exports.cadastrarCarros = (async (req, res) => {
    const veiculo = req.body
    const foundCarro = await models.Veiculos.findOne()
    const buscaMarcas = await models.Marcas.findAll()
    const buscaCores = await models.Cores.findAll()
    const buscaOpcionais = await models.Opcionais.findAll()
    console.log(req.body)

    if (!veiculo.carro || !veiculo.cambio || !veiculo.ano || !veiculo.km || !veiculo.motor) {
        res.render('cadastroCarros', {
            error: {
                descricao: 'Faltou preencher algum campo.',
            },
            content: req.body,
            title: 'Cadastro de Carros',
            buscaMarcas,
            buscaCores,
            buscaOpcionais,
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
            buscaOpcionais,
        })
        return
    }

    res.render('cadastroCarros', {
        buscaOpcionais,
        buscaMarcas,
        buscaCores,
        title: 'Cadastro de Carros',
        error: {}
    })

    const carros = {
        ...req.body
    }

    await models.Veiculos.create(carros)
    res.redirect('/cadastros/carros');
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

module.exports.cadastroOpcionais = (req, res) => {
    res.render('cadastroOpcionais', {
        title: 'Cadastro de Opcionais',
        pagina: 'cadastroOpcionais',
        user: req.session.usuario,
        error: {},
        content: {},
    })
}

module.exports.cadastrarOpcionais = (async (req, res) => {
    const opcionais = req.body.nomeDoOpcional
    const foundOpc = await models.Opcionais.findOne({
        where: {
            opcionais: req.body.nomeDoOpcional
        }
    })

    if (!opcionais) {
        res.render('cadastroOpcionais', {
            error: {
                nomeDoOpcional: 'Faltou preencher o campo Opcinal.',
            },
            content: req.body,
            title: 'Cadastro de Opcionais',
        })
        return
    }

    if (foundOpc) {
        res.render('cadastroOpcionais', {
            error: {
                nomeDoOpcional: 'Opcional já cadastrado',
            },
            content: req.body,
            title: 'Cadastro de Opcionais',
        })
        return
    }

    const opc = {
        opcionais: req.body.nomeDoOpcional
    }

    await models.Opcionais.create(opc)
    res.redirect('/cadastros/opcionais');
    return
})
