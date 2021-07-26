const express = require('express');
const router = express.Router();

const home = require('../controllers/home');

router.get('/', home.home);
/*router.get('/', home.index);*/
router.get('/carros/:id', home.exibeVeiculo);

module.exports = router;
