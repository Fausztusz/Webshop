var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

var getProductMW = require('../middleware/product/getProduct');
var getUserListMW = require('../middleware/user/getUserList');
var updateCartMW = require('../middleware/cart/updateCart');
var deleteCartMW = require('../middleware/cart/deleteCart');
var getCartListMW = require('../middleware/cart/getCartList');
//var getProductMW = require('../middleware/comment/getComment');

// var taskModel = require('../models/task');
// var commentModel = require('../models/comment');
// var userModel = require('../models/user');


module.exports = function (app) {
     var objectRepository = {
    //     taskModel: taskModel,
    //     commentModel: commentModel,
    //     userModel: userModel
     };

    /**
     * Show one CART
     */
    app.get('/cart/:cartid',
        authMW(objectRepository),
        getCartListMW(objectRepository),
        getUserListMW(objectRepository),
        getCartListMW(objectRepository),
        renderMW(objectRepository, 'cart')
    );

    /**
     * Show cart page POST part
     */
    app.post('/cart/:taskid',
        authMW(objectRepository),
        getTaskMW(objectRepository),
        updateCommentMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/task/' + req.param('taskid'));
        });

    /**
     * Edit comment
     */
    app.use('/comment/:taskid/:commentid/edit',
        authMW(objectRepository),
        getTaskMW(objectRepository),
        getCommentMW(objectRepository),
        onlyMyCommentMW(objectRepository),
        updateCommentMW(objectRepository),
        renderMW(objectRepository, 'commentmod')
    );

    /**
     * Delete comment
     */
    app.use('/comment/:taskid/:commentid/delete',
        authMW(objectRepository),
        getTaskMW(objectRepository),
        getCommentMW(objectRepository),
        onlyMyCommentMW(objectRepository),
        deleteCommentMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/task/' + req.param('taskid'));
        });
};
