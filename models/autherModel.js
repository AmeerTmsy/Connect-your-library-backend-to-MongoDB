const mongoose = require('mongoose');

const autherSchema = new mongoose.Schema({
    name: String,
    bio: String,
});

const Auther = mongoose.model('Auther', autherSchema);

module.exports = Auther