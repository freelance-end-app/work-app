var config = require('./config');
var user = require('models/user');
var gig = require('models/gig');
var product = require('models/product');

mongoose.connect(config.get('db_path'));