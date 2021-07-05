module.exports.index = (req, res) => {
    res.render('index', {
        title: 'Loja de Carros',
        pagina: 'index'
    });
}

module.exports.home = (req, res) => {
    res.render('home', {
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
