const { v4: uuidV4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const models = require('../models');

const users = require('../jsons/users.json');
const { createHash, compareHash } = require('../helpers/hash');
const { findUserByEmail, find } = require('../helpers/users');

const CAMINHO = path.join(__dirname, '..', 'jsons', 'users.json');

module.exports.paginaCadastro = (req, res) => {
    res.render('cadastro', {
        title: 'Loja de Carros - Cadastro',
        pagina: 'cadastro',
        user: null,/*req.session.usuario,*/
        error: {},
        content: {},
    });
}

/*module.exports.cadastrar = function (req, res) {
    const { nome, senha, confirmaSenha, email } = req.body;
    const foundUser = findUserByEmail(email, users);

    if (foundUser) {
        res.render('cadastro', {
            error: {
                email: 'Email já cadastrado',
            },
            content: req.body,
        });
        return
    }

    if (senha != confirmaSenha) {
        res.render('cadastro', {
            error: {
                senha: 'Senhas diferentes',
            },
            content: req.body,
        });
        return
    }

    const usuario = {
        id: uuidV4(),
        ...req.body,
        senha: createHash(senha),
    };

    delete usuario.confirmaSenha;

    users.push(usuario);

    fs.writeFileSync(CAMINHO, JSON.stringify(users));

    res.redirect('/admin/login');
    return
};*/

module.exports.criarAdmin = (async (req, res) => {
    const admin = req.body

    if (!admin.nome || !admin.email || !admin.senha) {
        res.send('Faltou preencher algum campo.')
    }

    await models.Administrador.create(admin)
    res.redirect('/admin/login');
    return
})

module.exports.paginaLogin = (req, res) => {
    res.render('login', {
        title: 'Loja de Carros - Login',
        pagina: 'login',
        user: null, /*req.session.usuario,*/
    });
}

module.exports.login = function (req, res) {
    const { email, senha } = req.body;
  
    const foundUser = find(email, users, 'email');
  
    if (!foundUser) {
      res.render('login');
    }
  
    if (!compareHash(senha, foundUser.senha)) {
      res.render('login');
    }
  
    req.session.usuario = foundUser;
  
    res.redirect('/cadastros');
  };
