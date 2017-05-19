var expect = require('chai').expect;
var should = require('chai').should;
var updateProductMW = require('../../../middleware/product/updateProduct');

describe('updateProduct middleware:', function () {

    describe('option setting', function () {
        it('should not modify name if unfilled', function (done) {
            var request = {
                body: {
                    name: ''
                }
            };
            var fakeProductModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    expect(opt.$set).to.not.have.property('name');
                    done();
                }
            };
            var objectRepository = {productModel: fakeProductModel};

            updateProductMW(objectRepository)(request, {}, function (err) {
            });


        });
        it('should not modify name if unfilled', function (done) {
            var request = {
                body: {
                    name: ''
                }
            };
            var fakeProductModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    expect(opt.$set).to.not.have.property('name');
                    done();
                }
            };
            var objectRepository = {productModel: fakeProductModel};

            updateProductMW(objectRepository)(request, {}, function (err) {
            });


        });
        it('should not modify picture if unfilled', function (done) {
            var request = {
                body: {
                    picture: ''
                }
            };
            var fakeProductModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    expect(opt.$set).to.not.have.property('picture');
                    done();
                }
            };
            var objectRepository = {productModel: fakeProductModel};

            updateProductMW(objectRepository)(request, {}, function (err) {
            });


        });
        it('should not modify the description if unfilled', function (done) {
            var request = {
                body: {
                    description : ''
                }
            };
            var fakeProductModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    expect(opt.$set).to.not.have.property('description');
                    done();
                }
            };
            var objectRepository = {productModel: fakeProductModel};

            updateProductMW(objectRepository)(request, {}, function (err) {
            });
        });
        it('should set the options if good', function (done) {
            var request = {
                body: {
                    _id: '1',
                    name: 'Meme',
                    description: 'Dank',
                    //Test
                    picture: 'https://www.youtube.com/watch?v=04F4xlWSFh0',
                    price: '100'
                }
            };
            var fakeProductModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    expect(id).to.be.equal('1');
                    expect(opt.$set.name).to.be.equal('Meme');
                    expect(opt.$set.description).to.be.equal('Dank');
                    expect(opt.$set.picture).to.be.equal('https://www.youtube.com/watch?v=04F4xlWSFh0');
                    expect(opt.$set.price).to.be.equal('100');
                    done();
                }
            };
            var objectRepository = {productModel: fakeProductModel};

            updateProductMW(objectRepository)(request, {}, function (err) {
            });
        });
    });
    describe('the update', function () {
        it('should call next if good', function (done) {
            var request = {
                body: {}
            };
            var response = {};
            var fakeProductModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    cb();
                }
            };
            var objectRepository = {productModel: fakeProductModel};

            updateProductMW(objectRepository)(request, response, function (err) {
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
            var fakeProductModel = {
                findByIdAndUpdate: function (id, opt, cb) {
                    cb("error");
                }
            };

            var objectRepository = {productModel: fakeProductModel};
            updateProductMW(objectRepository)(request, response, function (err) {
                expect(response.error).to.be.equal("error");
                done();
            });
        })

    });

    describe('the requireOption', function(){
        it('should throw error if bad objectRepository', function(done){
            var badfunct = function(){
                var objectRepository = {};
                updateProductMW(objectRepository)({}, {}, function (err) {});
            };
            expect(badfunct).to.throw(TypeError);
            done();
        });
    });
});