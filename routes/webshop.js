var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var gotPermit = require('../middleware/generic/gotPermission');

var getProductMW = require('../middleware/product/getProductList');
var updateProductMW = require('../middleware/product/updateProduct');
var deleteProductMW = require('../middleware/product/deleteProduct');
var getUserListMW = require('../middleware/user/getUserList');

var productModel = require('../models/product');

module.exports = function (app) {

    var objectRepository = {
        productModel: productModel
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
        getProductMW(objectRepository),
        renderMW(objectRepository, 'cart')
    );


};