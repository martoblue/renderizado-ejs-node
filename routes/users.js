const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile('./data/users.json', (err, data) => {
    if (err) {
      res.status(500).send('Error to read the file');
      return;
    }
    const users = JSON.parse(data);
    // Renderiza la vista 'user'
    // res.render('users', { users, layout: 'layouts/layout' });  <--- es lo mismo que abajo ECMS6
    res.render('users', { users: users, title: 'App Usuarios', layout: 'layouts/layout' });
  });
});

module.exports = router;
