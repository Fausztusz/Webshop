var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var gotPermit=require('../middleware/generic/gotPermission');

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
     * Delete product
     */
    app.use('/product/:productid/delete',
        authMW(objectRepository),
        gotPermit(objectRepository),
        getProductMW(objectRepository),
        deleteProductMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('createproduct');
        });

    app.use('/createproduct',
        authMW(objectRepository),
        gotPermit(),
        getProductMW(objectRepository),
        renderMW(objectRepository, 'createproduct')
    );
};