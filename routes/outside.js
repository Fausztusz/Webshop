var mainRedirectMW = require('../middleware/generic/mainRedirect');
var inverseAuthMW = require('../middleware/generic/inverseAuth');
var loginMW = require('../middleware/generic/login');
var logoutMW = require('../middleware/generic/logout');
var renderMW = require('../middleware/generic/render');

var userModel = require('../models/user');


module.exports = function (app) {

    var objectRepository = {
        userModel: userModel
    };

    /**
     * Main page
     */
    app.get('/',
        mainRedirectMW(objectRepository)
    );

    /**
     * Login page
     */
    app.use('/login',
        inverseAuthMW(objectRepository),
        loginMW(objectRepository),
        renderMW(objectRepository, 'login')
    );
    /**
     * Logout from page
     */
    app.use('/logout',
        logoutMW(objectRepository),
        mainRedirectMW()
    );

    /**
     * Forgotten password
     */
    app.use('/forgetpassword',
        renderMW(objectRepository, 'forgetpassword')
    );

};