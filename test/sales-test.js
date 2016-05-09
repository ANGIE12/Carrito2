var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('routes-test', function() {
    it('Deberia obtener estado 200 GET /sales');
    it('Deberia obtener un array GET /sales');
    it('Deberia obtener un JSON GET /sales');
    it('Deberia tener propiedad Total GET /sales');
    it('Deberia tener propiedad Items GET /sales');
    it('Deberia guardar un registro y obtener estado 200 POST');
});

it('Deberia obtener estado 200 GET /sales', function(done) {
    chai.request(server).get('/sales').end(function(err, res) {
        res.should.have.status(200);
        done();
    });
});

it('Deberia obtener un array GET /sales', function(done) {
    chai.request(server).get('/sales').end(function(err, res) {
        res.body.should.be.a('array');
        done();
    });
});

it('Deberia obtener un JSON GET /sales', function(done) {
    chai.request(server).get('/sales').end(function(err, res) {
        res.should.be.a.json;
        done();
    });
});

it('Deberia tener propiedad Total GET /sales', function(done) {
    chai.request(server).get('/sales').end(function(err, res) {
        var i;
        var len = res.body.length;
        for(i<0; i< len ; i++){
            res.body[i].should.have.property('Total');
        }
        done();
    });
});

it('Deberia tener propiedad Items GET /sales', function(done) {
    chai.request(server).get('/sales').end(function(err, res) {
        var i;
        var len = res.body.length;
        for(i<0; i< len ; i++){
            res.body[i].should.have.property('Items');
        }
        done();
    });
});

it('Deberia guardar un registro y obtener estado 200 POST /sales/addSale', function(done) {
    chai.request(server).post('/sales/addSale').send({
        "Total": 254782223,
        "Items": 40
    }).end(function(err, res) {
        res.should.have.status(200);
        done();
    });
});
