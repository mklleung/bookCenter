const
  logInController = require('./controllers/logInController')
  addBooksController = require('./controllers/addBooksController')
  mongoose = require( 'mongoose' );
  createError = require('http-errors');
  express = require('express');
  path = require('path');
  cookieParser = require('cookie-parser');
  logger = require('morgan');

  indexRouter = require('./routes/index');
  usersRouter = require('./routes/users');
  allBooksRouter = require('./routes/allBooks');
  departmentsRouter = require('./routes/departments');
  watchlistRouter = require('./routes/watchlist');
  yourPageRouter = require('./routes/yourPage');
  //addBooksRouter = require('./routes/addBooks');

var app = express();

// here is where we connect to the database!
mongoose.connect( 'mongodb://localhost/bookCenter' );
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected!")
});

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
//app.use('/addBooks', addBooksRouter);

app.get('/logins', logInController.getAllLogin );
app.post('/saveLogin', logInController.saveLogin );
app.post('/deleteLogin', logInController.deleteLogin );
app.use('/logins', function(req, res, next) {
  console.log("in / controller")
  res.render('logins', { title: 'Book Center App' });
});

app.get('/addBooks', addBooksController.getAllBooks );
app.post('/saveBook', addBooksController.saveBook );
app.post('/deleteBook', addBooksController.deleteBook );
app.use('/addBooks', function(req, res, next) {
  console.log("in / controller")
  res.render('addBooks', { title: 'Book Center App' });
});


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
