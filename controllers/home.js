const { UnorderedCollection } = require("http-errors");

module.exports.index = (req, res) => {
    res.render('index', {
        title: 'Loja de Carros',
        pagina: 'index'
    });
}

module.exports.home = (req, res) => {
    res.render('home', {
        carros: [{
            id: 1,
            name: 'Uno',
            descricao: 'loren',
            principal: {
                id:2,
                caminho: '/img/car-header.png'
            }
        },
        {
            id: 2,
            name: 'Uno',
            descricao: 'loren'
        },
        {
            id: 3,
            name: 'Uno',
            descricao: 'loren'
        },
        {
            id: 4,
            name: 'Uno',
            descricao: 'loren'
        },{
            id: 5,
            name: 'Uno',
            descricao: 'loren'
        },
        {
            id: 6,
            name: 'Uno',
            descricao: 'loren'
        },
        {
            id: 7,
            name: 'Uno',
            descricao: 'loren'
        },
        {
            id: 8,
            name: 'Uno',
            descricao: 'loren'
        },
        {
            id: 9,
            name: 'Uno',
            descricao: 'loren'
        },],
        title: 'Loja de Carros',
        pagina: 'home'
    });
}

module.exports.exibeVeiculo = (req, res) => {
    res.render('detalhes', {
        title: 'Detalhe do Veículo',
        pagina: 'detalhes',
        id: req.params.id
    })
}
