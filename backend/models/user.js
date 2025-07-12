const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uname: String,
    uemail: { type: String, unique: true },
    upassword: String
});

module.exports = mongoose.model('User', userSchema);
