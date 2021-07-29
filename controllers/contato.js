module.exports.contato = (req, res) => {
    res.render('contato', {
        title: 'Loja de Carros',
        pagina: 'contato',
        user: null,
    });
}
