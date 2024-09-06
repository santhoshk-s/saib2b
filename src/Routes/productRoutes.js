const express = require('express');
const router = express.Router();
const {addProduct,getProductById,getProducts,getImage,getProductsByCategory,updateProductPrice,getProductByProductId} = require('../controller/productController');

router.post('/product',addProduct);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.get('/image/:filename', getImage);
router.put('/products/update-price/:productId', updateProductPrice);
router.get('/products/:productId', getProductByProductId);
router.get('/products/category/:categoryId', getProductsByCategory);

module.exports = router;
