const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');

// Configure chai
chai.use(chaiHttp);
chai.should();

const Role = require('../../controllers/rolemgmt.controller.js');

let missingEmailBody = {
    "firstname": "Alexandar",
    "lastname": "King",
    "role": "SUPER ADMIN",
    "id": 209
}

let correctReqBody = {
    "firstname": "Alexandar",
    "lastname": "King",
    "email": "Alexandar@hotmail.com",
    "role": "SUPER ADMIN",
    "id": 209
}

describe('Role Management Routes', function () {
    describe('addRole() function', function () {
        // Test to check for error in case empty/no body is sent in request
        it('Should return error if no body found', function (done) {
            chai.request(app)
                .post('/user/role')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to check for error in case mandatory attributes not sent in request
        it('Should return error if mandatory attributes is missing in request', function (done) {
            chai.request(app)
                .post('/user/role').send(missingEmailBody)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });


        // Test to check for success in case of right request
        it('Should return success if correct request body passed', function (done) {
            chai.request(app)
                .post('/user/role').send(correctReqBody)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    done();
                });
        });
    }),
        describe('getRole() function', function () {
            // Test to check for error in id not passed in path param
            it('Should return error no path param found in url', function (done) {
                chai.request(app)
                    .get('/user/role')
                    .end((err, res) => {
                        res.should.have.status(404);
                        res.body.should.be.a('object');
                        done();
                    });
            });

            // Test to check for error in id not passed in path param
            it('Should return error no path param found in url', function (done) {
                chai.request(app)
                    .get('/user/role/Alexandar@hotmail.com')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });

        })

    describe('deleteRole() function', function () {
        // Test to check for error in id not passed in path param
        it('Should return error no path param found in url', function (done) {
            chai.request(app)
                .delete('/user/role')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    done();
                });
        });

        it('Should return no data random string passed', function (done) {
            chai.request(app)
                .delete('/user/role/randomenumber')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        it('Should return error random string passed', function (done) {
            chai.request(app)
                .delete('/user/role/Alexandar@hotmail.com')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

    })
});


// Update API share similar scnearios as add/get.