const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    isLogged: Boolean

});


module.exports = mongoose.model('User',userSchema)