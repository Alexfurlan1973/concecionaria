const { V4: uuidV4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const users = require('../jsons/users.json');
const { createHash, compareHash } = require('../helpers/hash');
const { findUserByEmail, find } = require('../helpers/users');

const CAMINHO = path.join(__dirname, '..', 'jsons', 'users.json');

module.exports.loginCadastro = (req, res) => {
    res.render('loginCadastro', {
        title: 'Loja de Carros',
        pagina: 'loginCadastro'
    });
}

module.exports.cadastrar = function (req, res) {
    const { password, confirm_password, email } = req.body;
    const foundUser = findUserByEmail(email, users);

    if (foundUser) {
        res.render('loginCadastro#paracadastro', {
            error: {
                email: 'Email já cadastrado',
            },
            content: req.body,
        });
    }

    if (password != confirm_password) {
        res.render('loginCadastro#paracadastro', {
            error: {
                senha: 'Senhas diferentes',
            },
            content: req.body,
        });
    }

    const usuario = {
        id: uuidV4(),
        ...req.body,
        password: createHash(password),
    };

    delete usuario.confirm_password;

    users.push(usuario);

    fs.writeFileSync(CAMINHO, JSON.stringify(users));

    res.redirect('/cadastros');
};

module.exports.login = function (req, res) {
    const { email, password } = req.body;
  
    const foundUser = find(email, users, 'email');
  
    if (!foundUser) {
      res.render('loginCadastro#paralogin');
    }
  
    if (!compareHash(password, foundUser.password)) {
      res.render('loginCadastro#paralogin');
    }
  
    req.session.usuario = foundUser;
  
    res.redirect('/cadastros');
  };