var requireOption = require('../common').requireOption;

/**
 * Sends an email to the given email with a new random pwd and the username.
 *
*/

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        return next();
    };

};

/*sudo ignore content below
For potential later usage

 function randomString() {
 var chars =
 "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
 var randomstring = '';
 var string_length = 100;
 for (var i=0; i<string_length; i++) {
 var rnum = Math.floor(Math.random() * chars.length);
 randomstring += chars.substring(rnum,rnum+1);
 }
 return randomstring;
 }

 for(var i=0; i<2000000; i++){db.test.save({x:i, data:randomString()});}
 */