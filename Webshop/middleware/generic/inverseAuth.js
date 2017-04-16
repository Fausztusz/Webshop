var requireOption = require('../common').requireOption;

/**
 * If the user is logged in, redirects to /
 */

module.exports = function (objectrepository) {

	var userModel = requireOption(objectrepository, 'userModel');

	return function (req, res, next) {
		return next();
	};

};
