var productsModel = require('../model/productModel');
var db = require('../model/connection');
//metodo para obtener todos los productos de la bd
exports.findAllProducts = function(req,res){
	productsModel.find(function(err,products){
		if(err){
			return res.status(500).send(err.message);
		}
		res.status(200).jsonp(products);
	});
};

exports.updateQuality = function(req,res){
	productsModel.findOne({Nombre: req.params.Nombre},function(err,product){
		product.Like = req.body.Like;
		product.Dislike = req.body.Dislike;
		product.save(function(err){
			if (err) {
				return res.status(500).send(err.message);
			}
			res.status(200).jsonp(product);
		});
	});
};
