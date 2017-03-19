/**
 * Cart model (mock)
 * @constructor
 */
var Cart = function () {
};

/**
 * An instance
 */
var CartInstanceMock = {
    userid: 1,
    product:[{
        productID: 1,
        quantity: 1,
        price:15
    }
    ],
    total:15
};

/**
 * Save the Cart to the db
 * @param cb error first callback
 * @returns {*}
 */
Cart.prototype.save = function (cb) {
    return cb(null, this);
};

/**
 * Delete an object from the cart
 * @param cb
 * @returns {*}
 */
Cart.prototype.remove = function (cb) {
    return cb(null);
};
module.exports = Cart;