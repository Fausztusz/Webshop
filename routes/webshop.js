var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var gotPermit = require('../middleware/generic/gotPermission');
var mainRedirect = require('../middleware/generic/mainRedirect');

var getUserbyIdMW = require('../middleware/user/getUserbyID');

var getProductMW = require('../middleware/product/getProductList');
var updateProductMW = require('../middleware/product/updateProduct');
var deleteProductMW = require('../middleware/product/deleteProduct');
var getUserListMW = require('../middleware/user/getUserList');

var addtoCartMW = require('../middleware/user/addtoCart');
var getCartMW = require('../middleware/user/getCart');
var deletefromCartMW = require('../middleware/user/deletefromCart');

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

    /**
     * Show the users cart
     */
    app.use('/cart/add',
        authMW(objectRepository),
        addtoCartMW(objectRepository),
        mainRedirect()
    );

    /**
     * Show the users cart
     */
    app.use('/cart',
        authMW(objectRepository),
        getUserbyIdMW(objectRepository),
        getCartMW(objectRepository),
        function (req,res, next) {
            console.log('### CART ###\n'+ res.tpl.cart + '### END CART ###');
            return next();
        },
        renderMW(objectRepository, 'cart')
    );

    /**
     * Implements the proper end of the memeshoppin
     */
    app.use('/pay', function (req, res, next) {
        res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    });

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
        console.log('CART::::\n'+ res.tpl.cart);
            return res.redirect('createproduct');
        });

    /**
     * Create product
     */
    app.use('/createproduct',
        authMW(objectRepository),
        gotPermit(),
        getProductMW(objectRepository),
        renderMW(objectRepository, 'createproduct')
    );

}
;