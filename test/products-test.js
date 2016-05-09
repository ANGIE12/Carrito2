var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('products-test', function() {
    it('Deberia obtener estado 200 GET /products');
    it('Deberia obtener un array GET /products');
    it('Deberia obtener un JSON GET /products');
    it('Deberia tener propiedad Nombre GET /products');
    it('Deberia tener propiedad Precio GET /products');
    it('Deberia tener propiedad Cantidad GET /products');
    it('Deberia tener propiedad Like GET /products');
    it('Deberia tener propiedad Dislike GET /products');
    it('Deberia tener propiedad Imagen GET /products');
    it('Deberia actualizar los likes y los dislikes de un producto y obtener estado 200 PUT /products/updateQuality/nameProduct');
});

it('Deberia obtener estado 200 GET /products', function(done) {
    chai.request(server).get('/products').end(function(err, res) {
        res.should.have.status(200);
        done();
    });
});

it('Deberia obtener un array GET /products', function(done) {
    chai.request(server).get('/products').end(function(err, res) {
        res.body.should.be.a('array');
        done();
    });
});

it('Deberia obtener un JSON GET /products', function(done) {
    chai.request(server).get('/products').end(function(err, res) {
        res.should.be.a.json;
        done();
    });
});

it('Deberia actualizar los likes y los dislikes de un producto PUT', function(done) {
    chai.request(server).put('/products/updateQuality/Camiseta Adidas').send({
        "Like": 26,
        "Dislike": 22
    }).end(function(err, res) {
        res.should.have.status(200);
        done();
    });
});

it('Deberia tener propiedad Nombre GET /products', function(done) {
    chai.request(server).get('/products').end(function(err, res) {
        var i;
        var len = res.body.length;
        for(i<0; i< len ; i++){
            res.body[i].should.have.property('Nombre');
        }
        done();
    });
});

it('Deberia tener propiedad Precio GET /products', function(done) {
    chai.request(server).get('/products').end(function(err, res) {
        var i;
        var len = res.body.length;
        for(i<0; i< len ; i++){
            res.body[i].should.have.property('Precio');
        }
        done();
    });
});

it('Deberia tener propiedad Cantidad GET /products', function(done) {
    chai.request(server).get('/products').end(function(err, res) {
        var i;
        var len = res.body.length;
        for(i<0; i< len ; i++){
            res.body[i].should.have.property('Cantidad');
        }
        done();
    });
});

it('Deberia tener propiedad Like GET /products', function(done) {
    chai.request(server).get('/products').end(function(err, res) {
        var i;
        var len = res.body.length;
        for(i<0; i< len ; i++){
            res.body[i].should.have.property('Like');
        }
        done();
    });
});

it('Deberia tener propiedad Dislike GET /products', function(done) {
    chai.request(server).get('/products').end(function(err, res) {
        var i;
        var len = res.body.length;
        for(i<0; i< len ; i++){
            res.body[i].should.have.property('Dislike');
        }
        done();
    });
});

it('Deberia tener propiedad Imagen GET /products', function(done) {
    chai.request(server).get('/products').end(function(err, res) {
        var i;
        var len = res.body.length;
        for(i<0; i< len ; i++){
            res.body[i].should.have.property('Imagen');
        }
        done();
    });
});
