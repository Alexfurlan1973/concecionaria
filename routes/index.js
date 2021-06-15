const express = require('express');
const router = express.Router();

const home = require('../controllers/home');

/* GET home page. */
router.get('/', home.index);
router.get('/home', home.home);

module.exports = router;
