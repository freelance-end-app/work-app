var config = require('config');
var User = require('models/user');
var Gig = require('models/gig');
var userjson = require('user');
var gigjson = require('gig');
var productjson = require('product');
var Product = require('models/product');

mongoose.connect(config.get('db_path'));

exports.insert = function(){
var user = new  User(userjson);
user.save(function(err){
  if (err){
    console.log(err);
  }
});

var gig = new Gig(gigjson);
gig.save(function(err){
  if (err){
    console.log(err);
  }
});

var product = new Product(productjson);
product.save(function(err){
  if (err){
    console.log(err);
  }
});
};
