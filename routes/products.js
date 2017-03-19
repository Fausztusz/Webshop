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
     * Show one product
     */
    app.get('/product/:productID',
        authMW(objectRepository),
        getProductMW(objectRepository),
        //we need all the user to make a list of them for "reassign"
        getUserListMW(objectRepository),
        renderMW(objectRepository, 'product')
    );

    /**
     * Show task page POST part
     * - only new comments can come from here :)
     */
    app.get('/product/:productid',
        authMW(objectRepository),
        getTaskMW(objectRepository),
        updateCommentMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/product/' + req.param('productid'));
        });

    /**
     * Edit product
     */
    app.use('/product/:productid/edit',
        authMW(objectRepository),
        gotPermit(objectRepository),
        getProductMW(objectRepository),
        updateProductMW(objectRepository),
        renderMW(objectRepository, 'productmod')
    );

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
            return res.redirect('../static/createproduct.html');
        });
};