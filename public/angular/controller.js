  var controllers=angular.module("Maincontrollers",["MainServices"]);

  controllers
  .controller("ProductsController",operaciones)
  .controller("carritoCtrl",carrito)
  .controller("RegisterVentasCtrl",ConfigVentas);

  //CONTROLADOR PRODUCTO
  function operaciones($scope, $http, ShopSesion) {
    $scope.productos = [];
    $scope.cantProductosCarrito = ShopSesion.getProducts().length;
    var refresh = function() {
      $http.get('/products').success(function(data) {
        $scope.productos = data;
      }).error(function(data) {
         console.log('Error: ' + data);
      });
    };
    refresh();
    this.tab = 0;
    this.setTab = function(newValue) {
      this.tab = newValue;
    };
    this.isSet = function(tabName) {
      return this.tab === tabName;
    };
    $scope.ordenarMayormenor = function(orden) {
      $scope.ordenMayor = orden;
    }
    $scope.add = function(producto) {
      $scope.cantProductosCarrito = ShopSesion.getProducts().length;
      ShopSesion.add(producto);
    }
    $scope.Likeclicked = [];
    $scope.Dislikeclicked = [];
    $scope.Likes = function(producto) {
      if (!$scope.Likeclicked[producto]) {
         producto.Like = producto.Like + 1;
         $scope.Likeclicked[producto] = true;
      }
      if ($scope.Dislikeclicked[producto] == true) {
         producto.Dislike = producto.Dislike - 1;
         $scope.Dislikeclicked[producto] = false;
      }
      var data = {
         Like: producto.Like,
         Dislike: producto.Dislike
      }
      $http.put('/products/updateQuality/' + producto.Nombre, data).success(function(data) {
         refresh();
      }).error(function(data) {
         console.log("Error " + data);
        });
    }
    $scope.Dislikes = function(producto) {
      if (!$scope.Dislikeclicked[producto]) {
        producto.Dislike = producto.Dislike + 1;
        $scope.Dislikeclicked[producto] = true;
      }
      if ($scope.Likeclicked[producto] == true) {
        producto.Like = producto.Like - 1;
        $scope.Likeclicked[producto] = false;
      }
      var data = {
        Like: producto.Like,
        Dislike: producto.Dislike
      }
      $http.put('/products/updateQuality/' + producto.Nombre, data).success(function(data) {
        refresh();
      }).error(function(data) {
        console.log("Error " + data);
        });
    }
    $scope.filtrarPor = function(orden) {
      $scope.filtroSeleccionado = orden;
    }
  }
  //CONTROLADOR CARRITO
  function carrito($scope, ShopSesion, $http) {
    $scope.Confirm = false;
    $scope.compraproducts = [];
    $scope.Visibility = true;
    $scope.newproducts = ShopSesion.getProducts();
    $scope.acumulador = 0;
    $scope.contador = 0;

    var verificar=function(){
      if ($scope.newproducts.length === 0) {
        $scope.empty = "Your Shopping Cart is empty.";
        $scope.Visibility = false;
      }
    }
    verificar();
    $scope.borrar = function(producto, date) {
      if ($scope.contador != 0) {
        $scope.contador -= 1;
        $scope.acumulador = $scope.acumulador - date.total;
      }
      if (($scope.newproducts.length === 0) && ($scope.contador === 0)) {
        $scope.empty = "Your Shopping Cart is empty.";
        $scope.Visibility = false;
      }
      var i;
      var len = $scope.newproducts.length;
      for (i = 0; i < len; i++) {
          if ($scope.newproducts[i].Nombre === producto.Nombre) {
            $scope.newproducts.splice(i, 1);
            verificar();
            return;
          }
      }
    }
    $scope.cantidad = function(date, producto) {
      if (date.nuevaCantidad > producto.Cantidad) {
        date.msj = "";
        date.confirm = "";
        date.total = "";
        date.err = "CANTIDAD INVALIDA";
        return;
      }
     date.err = "";
     date.msj = "CANTIDAD A COMPRAR : " + date.nuevaCantidad;
     date.total = date.nuevaCantidad * producto.Precio;
     date.confirm = "TOTAL ES : " ;
     date.nuevaCantidad = "";
     $scope.Confirm = true;
    }
    $scope.confirmar = function(producto, date) {
      var product = {};
        product.Nombre = producto.Nombre;
        product.Cantidad = date.total / producto.Precio;
        product.Precio = date.total;
        $scope.contador += 1;
        $scope.acumulador = $scope.acumulador + date.total;
        var i;
        var len = $scope.newproducts.length;
        for (i = 0; i < len; i++) {
            if ($scope.newproducts[i].Nombre === product.Nombre) {
               $scope.newproducts[i].Cantidad -= product.Cantidad;
            }
        }
      date.confirm = "";
      date.msj = "";
      $scope.compraproducts.push(product);
      $scope.Confirm = false;
    }
    $scope.comprarall = function() {
      var data = {
        Total: $scope.acumulador,
        Items: $scope.contador
      }
      $http.post('/sales/addSale', data).success(function(data) {
        alert('COMPRA EXITOSA!');
        verificar();
      }).error(function(data) {
        console.log("Error " + data);
        });
    }
  }
  //CONTROLADOR VENTAS
  function ConfigVentas($scope, $http) {
      $scope.sales = [];
      $scope.cantidadItems = 0;
      $scope.total = 0;
      var refresh = function() {
        $http.get('/sales').success(function(data) {
          $scope.sales = data;
          for (var i = 0; i < $scope.sales.length; i++) {
            $scope.cantidadItems += $scope.sales[i].Items;
            $scope.total += $scope.sales[i].Total;
          }
        }).error(function(data) {
          console.log('Error: ' + data);
          });
      };
      refresh();
  }
