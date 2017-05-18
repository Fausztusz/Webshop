/**
 * Edit the user object, if its already loaded
 */

var requireOption = require('../common').requireOption;


module.exports = function (objectRepository) {
	var User = requireOption(objectRepository, 'userModel');
	return function (req, res, next) {

		var options = req.body;
		var userID = req.body._id;
		// If the user left the field blank the value don't change
		delete options._id; //Protects the original _id
		if (!options.name) delete options.name;
		if (!options.email) delete options.email;
		if (!options.picture) delete options.picture;
		if (!(options.role == 0 || options.role == 1)) delete options.role; //Prevents invalid role commit

		User.findByIdAndUpdate(userID, {$set: options}, function (err) {
			if (err) {
				//console.log('##### Failed query at updateUser ######');
				//console.log(err);
				res.error = err;
			}
			return next();
		});
	};

};