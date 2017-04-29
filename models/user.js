/**
 * The model of a User
 */
var mongoose = require('../middleware/generic/db');
var Schema = mongoose.Schema;
var product=require('./product');
var userSchema = mongoose.Schema({
    name: {type: String, required: true},
    pwd: {type: String, required: true},
    email: {type: String, required: true},
    /*Role: 0 User,1 Admin*/
    role: {type: Number, default: 0},
    currency: {type: String, default: '$'},
    picture: {type: String, default: 'http://selfynomore.com/wp-content/themes/selfynomore_twentysixteen/images/no-image-found.jpg'},
    regdate: {type: Date, default: Date.now, required: true},
    cart: [
        {
        product: {type: Schema.Types.ObjectId,
                    ref:'product'},
        quantity: {type: Number}
        }
        /*More product...*/
    ]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
