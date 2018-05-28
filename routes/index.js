const router = require('express').Router();
const models = require('../models');
const Op = require('sequelize').Op

router.get('/', (req, res) => {
  res.render('main/index');
});
router.get('/login', (req, res) => {
  res.render('login-all/login');
});

module.exports = router;