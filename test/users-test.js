var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('users-test',function(){
	it('Deberia obtener estado 200 GET /users');
	it('Deberia obtener un array GET /users');
});

it ('Deberia obtener estado 200 GET /users',function(done){
	chai.request(server).get('/users').end(function(err,res){
		res.should.have.status(200);
		done();	
	});
});  

it ('Deberia obtener un array GET /users',function(done){
	chai.request(server).get('/users').end(function(err,res){
		res.should.be.a('array');
		done();	
	});
});

it('Deberia guardar un usuario y obtener estado 200 POST',function(done){
	chai.request(server).post('/users/save').send(
	{
		"Cedula":12300,
		"Nombre": "juanito",
		"Apellido": "Suares",
		"Correo": "ejemplo@hotmail.com",
		"Departamento": "Antioquía",
		"Ciudad": "Medellín",
		"Tipo": 1
	}).end(function(err,res){
		res.should.have.status(200);
		done();
	});
});