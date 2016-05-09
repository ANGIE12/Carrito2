var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var conn = require('../model/connection');
var should = chai.should();

chai.use(chaiHttp);

describe('routes-test',function(){
	it('Deberia obtener estado 200 GET /products');
	it('Deberia obtener un array GET /products');
	it('Deberia obtener estado 200 GET /users');
	it('Deberia obtener un array GET /users');
	it('Deberia obtener estado 200 GET /sales');
	it('Deberia obtener un array GET /sales');
	it('Deberia guardar un producto y obtener estado 200 POST /products/save');
	it('Deberia guardar un comentario y obtener estado 200 PUT /products/saveComment/productName');
	it('Deberia eliminar un comentario y obtener estado 200 DELETE /products/removeComment/Zapatos/productName');
	it('Deberia guardar un usuario y obtener estado 200 POST /users/save');
});

it ('Deberia obtener estado 200 GET /sales',function(done){
	chai.request(server).get('/sales').end(function(err,res){
		res.should.have.status(200);
		done();
	});
});

it ('Deberia obtener un array GET /sales',function(done){
	chai.request(server).get('/sales').end(function(err,res){
		res.should.be.a('array');
		done();
	});
});

it('Deberia obtener una conexion exitosa',function(done){
});
