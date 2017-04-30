var mainRedirectMW = require('../middleware/generic/mainRedirect');
var inverseAuthMW = require('../middleware/generic/inverseAuth');
var loginMW = require('../middleware/generic/login');
var logoutMW = require('../middleware/generic/logout');
var registrationMW = require('../middleware/user/registrateUser');
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
        mainRedirectMW(objectRepository)
    );

    /**
     * Forgotten password
     */
    app.use('/forgetpassword',
        renderMW(objectRepository, 'forgetpassword')
    );

    /**
     * Submit the users registration
     */
    app.use('/registration/submit',
        registrationMW(objectRepository),
        mainRedirectMW(objectRepository)
    );
    /**
     * Redirect to registration page
     */
    app.use('/registration',
        renderMW(objectRepository, 'registration')
    );
};