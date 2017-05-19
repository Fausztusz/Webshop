var expect = require('chai').expect;
var should = require('chai').should;
var updateUserMW = require('../../../middleware/user/updateUser');

describe('updateUser middleware:', function () {

	describe('option setting', function () {
		it('should not modify name if unfilled', function (done) {
			var request = {
				body: {
					name: ''
				}
			};
			var fakeUserModel = {
				findByIdAndUpdate: function (id, opt, cb) {
					expect(opt.$set).to.not.have.property('name');
					done();
				}
			};
			var objectRepository = {userModel: fakeUserModel};

			updateUserMW(objectRepository)(request, {}, function (err) {
			});


		});
		it('should not modify email if unfilled', function (done) {
			var request = {
				body: {
					email: ''
				}
			};
			var fakeUserModel = {
				findByIdAndUpdate: function (id, opt, cb) {
					expect(opt.$set).to.not.have.property('email');
					done();
				}
			};
			var objectRepository = {userModel: fakeUserModel};

			updateUserMW(objectRepository)(request, {}, function (err) {
			});


		});
		it('should not modify picture if unfilled', function (done) {
			var request = {
				body: {
					picture: ''
				}
			};
			var fakeUserModel = {
				findByIdAndUpdate: function (id, opt, cb) {
					expect(opt.$set).to.not.have.property('picture');
					done();
				}
			};
			var objectRepository = {userModel: fakeUserModel};

			updateUserMW(objectRepository)(request, {}, function (err) {
			});


		});
		it('should not modify the role if invalid', function (done) {
			var request = {
				body: {
					role: '42'
				}
			};
			var fakeUserModel = {
				findByIdAndUpdate: function (id, opt, cb) {
					expect(opt.$set).to.not.have.property('role');
					done();
				}
			};
			var objectRepository = {userModel: fakeUserModel};

			updateUserMW(objectRepository)(request, {}, function (err) {
			});
		});
		it('should set the options if good', function (done) {
			var request = {
				body: {
					_id: '1',
					name: 'Piti',
					email: 'pisimail',
					picture: 'létezik',
					role: '1'
				}
			};
			var fakeUserModel = {
				findByIdAndUpdate: function (id, opt, cb) {
					expect(id).to.be.equal('1');
					expect(opt.$set.name).to.be.equal('Piti');
					expect(opt.$set.email).to.be.equal('pisimail');
					expect(opt.$set.picture).to.be.equal('létezik');
					expect(opt.$set.role).to.be.equal('1');
					done();
				}
			};
			var objectRepository = {userModel: fakeUserModel};

			updateUserMW(objectRepository)(request, {}, function (err) {
			});
		});
	});
	describe('the update', function () {
		it('should call next if good', function (done) {
			var request = {
				body: {}
			};
			var response = {};
			var fakeUserModel = {
				findByIdAndUpdate: function (id, opt, cb) {
					cb();
				}
			};
			var objectRepository = {userModel: fakeUserModel};

			updateUserMW(objectRepository)(request, response, function (err) {
				expect(response.error).to.be.equal(undefined);
				expect(err).to.be.equal(undefined);
				done();
			});
		});
		it('should add res.error if database fail', function (done) {
			var request = {
				body: {}
			};
			var response = {};
			var fakeUserModel = {
				findByIdAndUpdate: function (id, opt, cb) {
					cb("error");
				}
			};

			var objectRepository = {userModel: fakeUserModel};
			updateUserMW(objectRepository)(request, response, function (err) {
				expect(response.error).to.be.equal("error");
				done();
			});
		})

	});

	describe('the requireOption', function(){
		it('should throw error if bad objectRepository', function(done){
			var badfunct = function(){
				var objectRepository = {};
				updateUserMW(objectRepository)({}, {}, function (err) {});
			};
			expect(badfunct).to.throw(TypeError);
			done();
		});
	});
});