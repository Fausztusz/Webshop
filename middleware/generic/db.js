mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Webshop');

module.exports = mongoose;