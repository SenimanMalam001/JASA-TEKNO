const router = require('express').Router();
const models = require('../models');
const Op = require('sequelize').Op

router.get('/', (req, res) => {
  res.render('desainer/home');
});

router.get('/desain', (req, res) => {
  res.render('desainer/desain');
});

router.get('/profil', (req, res) => {
  res.render('desainer/profil');
});

module.exports = router;