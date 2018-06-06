const router = require('express').Router();
const models = require('../models');
const Op = require('sequelize').Op

router.get('/', (req, res) => {
  res.render('main/index');
});

router.get('/login', (req, res) => {
  res.render('login-all/login');
});

router.get('/reset-password', (req, res) => {
  res.render('login-all/reset-password');
});

router.get('/register', (req, res) => {
  res.render('login-all/register');
});

router.get('/jasa', (req, res) => {
  res.render('main/navbar-jasa');
});

router.get('/detail-jasa', (req, res) => {
  res.render('main/detail-jasa');
});

router.get('/tentang-kami', (req, res) => {
  res.render('main/tentang-kami');
});

module.exports = router;