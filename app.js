const express = require('express'); // CommonJS
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// Establecer EJS como template engine (motor de plantillas)
app.set('view engine', 'ejs');
// Requerir Rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use(expressLayouts);

app.use('/', indexRouter);

app.use('/users', usersRouter);

app.use('/public', express.static('public'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
