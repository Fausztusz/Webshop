var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var gotPermit = require('../middleware/generic/gotPermission');
var mainRedirect = require('../middleware/generic/mainRedirect');

var getProductMW = require('../middleware/product/getProductList');
var getProductbyIDMW = require('../middleware/product/getProductbyID');
var updateProductMW = require('../middleware/product/updateProduct');
var deleteProductMW = require('../middleware/product/deleteProduct');
var createProductMW = require('../middleware/product/createProduct');
var getUserListMW = require('../middleware/user/getUserList');

var getLoggedUser = require('../middleware/user/getLoggedUser');
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
        mainRedirect(objectRepository)
    );

    /**
     * Delete a product from the users cart
     */
    app.use('/cart/delete',
        authMW(objectRepository),
        deletefromCartMW(objectRepository),
        function (req, res, next) {
            res.redirect('/cart');
        }
    );

    /**
     * Show the users cart
     */
    app.use('/cart',
        authMW(objectRepository),
        getLoggedUser(objectRepository),
        getCartMW(objectRepository),
        renderMW(objectRepository, 'cart')
    );

    /**
     * Implements the proper end of the meme shopping
     */
    app.use('/pay', function (req, res, next) {
        res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    });


    /**
     * Create product form the users input
     */
    app.use('/createproduct/submit',
        authMW(objectRepository),
        gotPermit(objectRepository),
        createProductMW(objectRepository),
        function (req, res, next) {
            res.redirect('/createproduct')
        }
    );
    /**
     * Delete product
     */
    app.use('/createproduct/delete',
        authMW(objectRepository),
        gotPermit(objectRepository),
        deleteProductMW(objectRepository),
        function (req, res, next) {
            res.redirect('/createproduct')
        }
    );
    /**
     * Edit product
     */
    app.use('/createproduct/edit/submit',
        authMW(objectRepository),
        gotPermit(objectRepository),
        updateProductMW(objectRepository),
        function (req, res, next) {
            res.redirect('/createproduct')
        }
    );

    /**
     * Get a product to edit
     */
    app.use('/createproduct/edit',
        authMW(objectRepository),
        gotPermit(objectRepository),
        getProductbyIDMW(objectRepository),
        renderMW(objectRepository, 'editproduct')
    );

    /**
     * Get the create product page
     */
    app.use('/createproduct',
        authMW(objectRepository),
        gotPermit(objectRepository),
        getProductMW(objectRepository),
        renderMW(objectRepository, 'createproduct')
    );
}
;