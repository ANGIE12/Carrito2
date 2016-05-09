var app=angular.module("MainApp",["ngRoute","Maincontrollers","ngMaterial"]);
app.config(Route);

function Route($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: '/views/home.html'
	})
	.when("/registro",{
        controller: "RegisterVentasCtrl",
		templateUrl:"/views/RegistroVentas.html"
	}).when('/productos',{
		controller: "ProductsController",
		templateUrl:'/views/products.html'
	}).when("/carrito",{
		controller: 'carritoCtrl',
		templateUrl: "/views/carrito.html"
    }).otherwise({
		redirectTo: '/'
	});
};
