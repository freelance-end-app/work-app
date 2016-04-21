var express = require('express');
var path = require('path');
var app = module.exports = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var config = require('./config');
var exphbs = require('express-handlebars');


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var config = require('./config');
var config = require('./config');
var exphbs  = require('express-handlebars');




mongoose.connect(config.get('db_path'));
var app = module.exports = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || config.get('port'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));




app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
