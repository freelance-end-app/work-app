var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String, unique: true },
    password: { type: String, required: true },
    isVerified: false
});


module.exports = mongoose.model('users', userSchema);