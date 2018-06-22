const
  logInController = require('./controllers/logInController')
  addBooksController = require('./controllers/addBooksController')
  allBooksController = require('./controllers/allBooksController')
  //sellerBooksController = require('./controllers/sellerBooksController')
  mongoose = require( 'mongoose' );
  createError = require('http-errors');
  express = require('express');
  path = require('path');
  cookieParser = require('cookie-parser');
  logger = require('morgan');
  session = require("express-session"),
  bodyParser = require("body-parser"),
  User = require( './models/user' ),
  flash = require('connect-flash')

  indexRouter = require('./routes/index');
  usersRouter = require('./routes/users');
  //allBooksRouter = require('./routes/allBooks');
  departmentsRouter = require('./routes/departments');
  //watchlistRouter = require('./routes/watchlist');
  profileRouter = require('./routes/profile');
  //addBooksRouter = require('./routes/addBooks');

  var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

   // here we set up authentication with passport
   const passport = require('passport')
   const configPassport = require('./config/passport')
   configPassport(passport)


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

//middleware to process the req object and make it more useful!
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'zzbbyanana' }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/allBooks', allBooksRouter);
app.use('/departments', departmentsRouter);
//app.use('/watchlist', watchlistRouter);
app.use('/profile2',isLoggedIn, profileRouter);
//app.use('/addBooks', addBooksRouter);

app.get('/loginerror', function(req,res){
  res.render('loginerror',{})
})

app.get('/logins', function(req,res){
  res.render('logins',{})
})

// we require them to be logged in to see their profile
app.get('/profile', isLoggedIn, function(req, res) {
      console.log(`req.user = ${req.user}`)
        res.render('profile', {
            user : req.user // get the user out of session and pass to template
        });
    });

app.get('/addBooks', isLoggedIn, function(req, res) {
      console.log(`req.user = ${req.user}`)
        res.render('addBooks', {
            user : req.user // get the user out of session and pass to template
        });
    });

app.get('/watchlist', isLoggedIn, function(req, res) {
      console.log(`req.user = ${req.user}`)
        res.render('watchlist', {
            user : req.user // get the user out of session and pass to template
        });
    });

// route for logging out
app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/loginerror'
            }));

    app.get('/login/authorized',
            passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/loginerror'
            }));

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    console.log("checking to see if they are authenticated!")
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()){
      console.log("user has been Authenticated")
      return next();
    }

    console.log("user has not been authenticated...")
    // if they aren't redirect them to the home page
    res.redirect('/logins');
}

/*app.get('/logins', isLoggedIn,logInController.getAllLogin );
app.post('/saveLogin', isLoggedIn,logInController.saveLogin );
app.post('/deleteLogin', isLoggedIn,logInController.deleteLogin );
app.use('/logins', function(req, res, next) {
  console.log("in / controller")
  res.render('logins', { title: 'Book Center App' });
});*/
app.get('/allBooks',allBooksController.getAllBooks );
app.get('/addBooks',isLoggedIn,addBooksController.getAllBooks );
//app.get('/profile',isLoggedIn,sellerBooksController.getAllBooks );
app.post('/saveBook',addBooksController.saveBook );
app.post('/deleteBook',addBooksController.deleteBook );
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
