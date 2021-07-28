module.exports.cadastros = (req, res) => {
    res.render('cadastros', {
        title: 'Pagina de Cadastros',
        pagina: 'cadastros',
        user: null/*req.session.usuario,*/
    });
}

module.exports.cadastroCarros = (req, res) => {
    res.render('cadastroCarros', {
        title: 'Cadastro de Carros',
        pagina: 'cadastroCarros',
        user: req.session.usuario,
    })
}

module.exports.cadastroMarcas = (req, res) => {
    res.render('cadastroMarcas', {
        title: 'Cadastro de Marcas',
        pagina: 'cadastroMarcas',
        user: req.session.usuario,
    })
}

module.exports.cadastroCores = (req, res) => {
    res.render('cadastroCores', {
        title: 'Cadastro de Cores',
        pagina: 'cadastroCores',
        user: req.session.usuario,
    })
}

module.exports.cadastroOpcionais = (req, res) => {
    res.render('cadastroOpcionais', {
        title: 'Cadastro de Opcionais',
        pagina: 'cadastroOpcionais',
        user: req.session.usuario,
    })
}
