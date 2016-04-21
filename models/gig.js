var mongoose = require('mongoose');


var Schema = new mongoose.Schema;
var gigSchema = new Schema({
    name: { type: String, required: true },
    userId: String
});

module.exports = mongoose.model('gigs', gigSchema);
