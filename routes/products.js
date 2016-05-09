var express = require('express');
var router = express.Router();
var managerProducts = require('../controllers/products');

router.get('/',managerProducts.findAllProducts);
router.put('/updateQuality/:Nombre',managerProducts.updateQuality);
module.exports = router;
