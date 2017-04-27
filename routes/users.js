var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var gotPermit=require('../middleware/generic/gotPermission');

var getUserListMW = require('../middleware/user/getUserList');
var deleteUserMW = require('../middleware/user/deleteUser');

var userModel = require('../models/user');

module.exports = function (app) {

    var objectRepository = {
         userModel: userModel
    };

    app.use('/editusers/:userid/delete',
        authMW(objectRepository),
        gotPermit(objectRepository),
        deleteUserMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('editusers');
        });


    app.use('/editusers',
        authMW(objectRepository),
        gotPermit(),
        getUserListMW(objectRepository),
        renderMW(objectRepository, 'editusers')
    );
};

