var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var gotPermit=require('../middleware/generic/gotPermission');

var getUserListMW = require('../middleware/user/getUserList');
var deleteUserMW = require('../middleware/user/deleteUser');
var editUserMW = require('../middleware/user/editUser');
var getUserbyIdMW = require('../middleware/user/getUserbyID');

var userModel = require('../models/user');

module.exports = function (app) {

    var objectRepository = {
         userModel: userModel
    };

    app.use('/editusers/delete',
        authMW(objectRepository),
        gotPermit(objectRepository),
        deleteUserMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/editusers');
        });

    app.use('/editusers/edit/submit',
        authMW(objectRepository),
        gotPermit(objectRepository),
        editUserMW(objectRepository),
        function (req, res,next) {
            res.redirect('/editusers');
        }
        );

    app.use('/editusers/edit',
        authMW(objectRepository),
        gotPermit(objectRepository),
        getUserbyIdMW(objectRepository),
        renderMW(objectRepository, 'edituser')
        );


    app.use('/editusers',
        authMW(objectRepository),
        gotPermit(),
        getUserListMW(objectRepository),
        renderMW(objectRepository, 'editUsers')
    );
};

