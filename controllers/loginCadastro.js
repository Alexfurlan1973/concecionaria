const { v4: uuidV4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const users = require('../jsons/users.json');
const { createHash, compareHash } = require('../helpers/hash');
const { findUserByEmail, find } = require('../helpers/users');

const CAMINHO = path.join(__dirname, '..', 'jsons', 'users.json');

module.exports.loginCadastro = (req, res) => {
    res.render('loginCadastro', {
        title: 'Loja de Carros',
        pagina: 'loginCadastro',
        content: null,
    });
}

module.exports.cadastrar = function (req, res) {
    const { nome_cad, senha_cad, confirma_senha_cad, email_cad } = req.body;
    const foundUser = findUserByEmail(email_cad, users);

    if (foundUser) {
        res.render('loginCadastro', {
            error: {
                email_cad: 'Email já cadastrado',
            },
            content: req.body,
        });
        return
    }

    if (senha_cad != confirma_senha_cad) {
        res.render('loginCadastro', {
            error: {
                senha_cad: 'Senhas diferentes',
            },
            content: req.body,
        });
        return
    }

    const usuario = {
        id: uuidV4(),
        ...req.body,
        senha_cad: createHash(senha_cad),
    };

    delete usuario.confirma_senha_cad;

    users.push(usuario);

    fs.writeFileSync(CAMINHO, JSON.stringify(users));

    res.redirect('/cadastros');
    return
};

module.exports.login = function (req, res) {
    const { email, password } = req.body;
  
    const foundUser = find(email, users, 'email');
  
    if (!foundUser) {
      res.render('loginCadastro');
    }
  
    if (!compareHash(password, foundUser.password)) {
      res.render('loginCadastro');
    }
  
    req.session.usuario = foundUser;
  
    res.redirect('/cadastros');
  };