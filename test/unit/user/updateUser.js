var expect = require('chai').expect;
var should = require('chai').should;
var updateUserMW = require('../../../middleware/user/updateUser');

describe('updateUser middleware ', function () {

    describe('Should remove property when', function () {
        it('Name not exist', function (done) {
            var request = {
                body: {
                    name: undefined,
                }
            };
            var fakeUserModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    cb();
                }
            };
            var objectRepository = {userModel: fakeUserModel};

            updateUserMW(objectRepository)(request, {}, function (err) {
                expect(request.body).to.not.have.property('name');
                done();
            })


        });
        it('Email not exist', function (done) {
            var request = {
                body: {
                    email: undefined
                }
            };
            var fakeUserModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    cb();
                }
            };
            var objectRepository = {userModel: fakeUserModel};

            updateUserMW(objectRepository)(request, {}, function (err) {
                expect(request.body).to.not.have.property('email');
                done();
            })


        });
        it('Picture not exist', function (done) {
            var request = {
                body: {
                    picture: undefined
                }
            };
            var fakeUserModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    cb();
                }
            };
            var objectRepository = {userModel: fakeUserModel};

            updateUserMW(objectRepository)(request, {}, function (err) {
                expect(request.body).to.not.have.property('picture');
                done();
            })


        });
        it('Role not exist', function (done) {
            var request = {
                body: {
                    role: undefined
                }
            };
            var fakeUserModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    cb();
                }
            };
            var objectRepository = {userModel: fakeUserModel};

            updateUserMW(objectRepository)(request, {}, function (err) {
                expect(request.body).to.not.have.property('role');
                done();
            })


        });
    });
    describe('Should call next when ', function () {
        it('Correct working', function (done) {
            var request = {
                body: {
                    _id: 1,
                    name: 'Piti',
                    email: 'pisimail',
                    picture: 'létezik',
                    role: '1'
                }
            };
            var response = {tpl: {}};
            var fakeUserModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    cb();
                }
            };

            var objectRepository = {userModel: fakeUserModel};
            updateUserMW(objectRepository)(request, response, function (err) {
                expect(err).to.be.equal(undefined);
                done();
            })
        });
        it('Throw err', function (done) {
            var request = {
                body: {
                    _id: undefined,
                    name: 'Piti',
                    email: 'pisimail',
                    picture: 'létezik',
                    role: '1'
                }
            };
            var response = {tpl: {}};
            var fakeUserModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    cb();
                }
            };

            var objectRepository = {userModel: fakeUserModel};
            updateUserMW(objectRepository)(request, response, function (err) {

                done();
            })
        })

    });
});