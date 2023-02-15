const express = require('express');
const router = express.Router();


const ProductController= require('../controller/ProductController')


router.get('/', ProductController.showProducts);
router.get('/:id',ProductController.getProduct);
router.get('/create', ProductController.createProduct);
router.post('/create', ProductController.createProductPost);


module.exports = router;