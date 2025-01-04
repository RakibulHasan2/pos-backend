const express = require('express');
const {
    createCategory,
} = require('../../src/controllers/categoryController');

const router = express.Router();

// Create a new product
router.post('/crate-category', createCategory);

// // Get all products
// router.get('/getProduct', getAllProducts);

// // Get a single product by ID
// router.get('/single/:id', getProductById);

// // Update a product
// router.put('/update/:id', updateProduct);

// // Delete a product
// router.delete('/delete/:id', deleteProduct);

module.exports = router;
