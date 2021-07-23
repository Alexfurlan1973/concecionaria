const express = require('express');
const router = express.Router();

const home = require('../controllers/home');

/* GET home page. */
router.get('/', home.home);
/*router.get('/home', home.home);*/
router.get('/carros/:id', home.exibeVeiculo);

module.exports = router;
