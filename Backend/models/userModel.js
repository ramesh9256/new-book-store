const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    img: { type: String},
    title: { type: String},
    author: { type: String},
    price : { type: Number},
});

const User = mongoose.model('User', userSchema);
module.exports = User;
