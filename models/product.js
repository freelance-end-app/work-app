var mongoose = require('mongoose');


var productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gigId: String,
    price: Number,
    purchases: Array
});


module.exports = mongoose.model('products', productSchema);
