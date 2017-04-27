var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var gotPermit = require('../middleware/generic/gotPermission');

var getProductMW = require('../middleware/product/getProductList');
var updateProductMW = require('../middleware/product/updateProduct');
var deleteProductMW = require('../middleware/product/deleteProduct');
var getUserListMW = require('../middleware/user/getUserList');

var productModel = require('../models/product');
var userModel = require('../models/user');

module.exports = function (app) {

    var objectRepository = {
        productModel: productModel,
        userModel: userModel
    };

    /**
     * Show the main page
     */

    app.use('/webshop',
        authMW(objectRepository),
        getProductMW(objectRepository),
        renderMW(objectRepository, 'webshop')
    );
    app.use('/cart',
        authMW(objectRepository),
        gotPermit(),
        getProductMW(objectRepository),
        renderMW(objectRepository, 'cart')
    );
    app.use('/pay', function (req, res, next) {
        res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    });




};