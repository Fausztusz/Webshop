var requireOption = require('../common').requireOption;

/**
 * Load all the user
 * and put them on res.tpl.user
 */
module.exports = function (objectrepository) {
        var mockUser = require('./mockUser');

        return function (req, res, next) {
            res.tpl.users = mockUser;
            return next();
        };

};



//Akarok CRUD-ot a userekre is?

/*
var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

var getUserListMW = require('../middleware/employees/getEmployeeList');
var updateUserMW = require('../middleware/employees/updateEmployee');
var getUserMW = require('../middleware/employees/getEmployee');
var deleteUserMW = require('../middleware/employees/getEmployee');
var employeeModel = {};

module.exports = function (app) {

    var objectRepository = {
        userModel: userModel
    };

    /!**
     * Add new user
     *!/

    app.use('/user/new',
        authMW(objectRepository),
        updateEmployeeMW(objectRepository),
        renderMW(objectRepository, 'user_edit')
    );

    /!**
     * Edit the employee details
     *!/

    app.use('/users/:userid/edit',
        authMW(objectRepository),
        getEmployeeMW(objectRepository),
        updateEmployeeMW(objectRepository),
        renderMW(objectRepository, 'user_edit')
    );

    /!**
     * Delete user
     * - then redirect to /user
     *!/

    app.use('/users/:userid/delete',
        authMW(objectRepository),
        getEmployeeMW(objectRepository),
        deleteEmployeeMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/users');
        }
    );

    /!**
     * List all employee
     *!/

    app.use('/users',
        authMW(objectRepository),
        getEmployeeListMW(objectRepository),
        renderMW(objectRepository, 'users')
    );


};

*/
