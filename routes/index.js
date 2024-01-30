// Layout
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'App Usuarios', layout: 'layouts/layout' });
});

module.exports = router;
