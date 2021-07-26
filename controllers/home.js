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
            name: 'Uno 1.6R',
            descricao: 'loren',
            principal: {
                id:2,
                caminho: '/img/car-header.png'
            }
        },
        {
            id: 2,
            name: 'Camaro V8 SS',
            descricao: 'loren'
        },
        {
            id: 3,
            name: 'Ka 1.0',
            descricao: 'loren'
        },
        {
            id: 4,
            name: 'Chevette 1.6 SL',
            descricao: 'loren'
        },{
            id: 5,
            name: 'City LX',
            descricao: 'loren'
        },
        {
            id: 6,
            name: 'Golf 2.0 MI Flex Comfortline Sport',
            descricao: 'loren'
        },
        {
            id: 7,
            name: 'Fusca 67',
            descricao: 'loren'
        },
        {
            id: 8,
            name: 'Saturn SC 1.9 Cupê',
            descricao: 'loren'
        },
        {
            id: 9,
            name: 'Clio Hatch Expression',
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
