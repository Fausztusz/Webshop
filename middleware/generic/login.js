var requireOption = require('../common').requireOption;

/**
 *  Manages session start and creates session-id.
 */

module.exports = function (objectrepository) {

	var userModel = requireOption(objectrepository, 'userModel');

	return function (req, res, next) {
        res.tpl.product= require('../product/mockProduct');
        res.tpl.user= require('../user/mockUser');
		return next();
	};

};

/*
 * sudo ignore content bellow
 *
 * res.tpl.role=
 * admin->1
 * user->0
 * */