var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var gotPermit=require('../middleware/generic/gotPermission');

var getUserListMW = require('../middleware/user/getUserList');
var deleteUserMW = require('../middleware/user/deleteUser');
var editUserMW = require('../middleware/user/updateUser');
var getUserbyIdMW = require('../middleware/user/getUserbyID');

var userModel = require('../models/user');

module.exports = function (app) {

    var objectRepository = {
        userModel: userModel
    };

    /**
     * Delete a user
     */
    app.use('/editusers/delete',
        authMW(objectRepository),
        gotPermit(objectRepository),
        deleteUserMW(objectRepository),
        //simple redirect
        function (req, res, next) {
            return res.redirect('/editusers');
        });
    /**
     * Commit the update of a user
     */
    app.use('/editusers/edit/submit',
        authMW(objectRepository),
        gotPermit(objectRepository),
        editUserMW(objectRepository),
        function (req, res,next) {
            res.redirect('/editusers');
        }
        );
    /**
     * Display a single user to edit
     */
    app.use('/editusers/edit',
        authMW(objectRepository),
        gotPermit(objectRepository),
        getUserbyIdMW(objectRepository),
        renderMW(objectRepository, 'updateUser')
        );

    /**
     * Display all users who could be edited
     */
    app.use('/editusers',
        authMW(objectRepository),
        gotPermit(objectRepository),
        getUserListMW(objectRepository),
        renderMW(objectRepository, 'editUsers')
    );
};

