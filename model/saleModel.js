var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var salesSchema = new Schema({
	Total: {
		type: Number,
		required: true
	},
	Items: {
		type: Number,
		required: true
	},
	Fecha: {
		type: Date,
		default: Date.now
	}
});

var salesModel = mongoose.model('registro', salesSchema);
module.exports = salesModel;
