var services= angular.module("MainServices",[]);
services.factory("ShopSesion",[shop]);

function shop (){
   var newProductos=[];
   var ShopSesion = {
    getProducts: function(){
        return newProductos;
    },
    add:function(product){
        var i;
        var len= newProductos.length;
        for(i=0; i < len;i++){
            if(newProductos[i].Nombre===product.Nombre){
                return;
            }
        }
         newProductos.push(product);
     }
 }
 return  ShopSesion;

};
