var mongoose=require('../middleware/generic/db');
/***
 * The model of a product
 */
var Schema = mongoose.Schema;
var productSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    picture: String,
    price: {type: Number, required: true}
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;