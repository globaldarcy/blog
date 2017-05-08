var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var fs = require('fs');
var accessLog = fs.createWriteStream('accessLog', {flags: 'a'});
var errorLog = fs.createWriteStream('errorLog', {flags: 'a'});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.disable('x-powered-by');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(logger({stream:accessLog}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (err, req, res, next) {
    var meta = '[' + new Date() + ']' + req.url + '\n';
    errorLog.write(meta + err.stack + '\n');
    next();
})

app.use('/', index);
app.use('/users', users);

app.use(passport.initialize());
passport.use(new GithubStrategy({
  clientID: '179a890dbe7ccbccb2a1',
  ClientSecret: '2fa91fd578e5e0a8c838188a23926474d167692c',
  callbackURL: 'http://localhost:3000/login/github/callback',
}, function (accessToken, refreshToken, profile, done) {
  done(null, profile);
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
