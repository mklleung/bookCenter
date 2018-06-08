var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var allBooksRouter = require('./routes/allBooks');
var departmentsRouter = require('./routes/departments');
var watchlistRouter = require('./routes/watchlist');
var yourPageRouter = require('./routes/yourPage');
var logInRouter = require('./routes/logIn');
var aRouter = require('./routes/a');
var bRouter = require('./routes/b');
var cRouter = require('./routes/c');
var dRouter = require('./routes/d');
var eRouter = require('./routes/e');
var fRouter = require('./routes/f');
var gRouter = require('./routes/g');
var hRouter = require('./routes/h');
var iRouter = require('./routes/i');
var jRouter = require('./routes/j');
var kRouter = require('./routes/k');
var lRouter = require('./routes/l');
var mRouter = require('./routes/m');
var nRouter = require('./routes/n');
var oRouter = require('./routes/o');
var pRouter = require('./routes/p');
var qRouter = require('./routes/q');
var rRouter = require('./routes/r');
var sRouter = require('./routes/s');
var tRouter = require('./routes/t');
var uRouter = require('./routes/u');
var vRouter = require('./routes/v');
var wRouter = require('./routes/w');
var xRouter = require('./routes/x');
var yRouter = require('./routes/y');
var zRouter = require('./routes/z');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/allBooks', allBooksRouter);
app.use('/departments', departmentsRouter);
app.use('/watchlist', watchlistRouter);
app.use('/yourPage', yourPageRouter);
app.use('/logIn', logInRouter);
app.use('/departments/A', aRouter);
app.use('/departments/B', bRouter);
app.use('/departments/C', cRouter);
app.use('/departments/D', dRouter);
app.use('/departments/E', eRouter);
app.use('/departments/F', fRouter);
app.use('/departments/G', gRouter);
app.use('/departments/H', hRouter);
app.use('/departments/I', iRouter);
app.use('/departments/J', jRouter);
app.use('/departments/K', kRouter);
app.use('/departments/L', lRouter);
app.use('/departments/M', mRouter);
app.use('/departments/N', nRouter);
app.use('/departments/O', oRouter);
app.use('/departments/P', pRouter);
app.use('/departments/Q', qRouter);
app.use('/departments/R', rRouter);
app.use('/departments/S', sRouter);
app.use('/departments/T', tRouter);
app.use('/departments/U', uRouter);
app.use('/departments/V', vRouter);
app.use('/departments/W', wRouter);
app.use('/departments/X', xRouter);
app.use('/departments/Y', yRouter);
app.use('/departments/Z', zRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
