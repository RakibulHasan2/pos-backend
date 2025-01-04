const express = require('express');
const {
    createCategory,
    getAllCategories,
    getCategoryById
} = require('../../src/controllers/categoryController');

const router = express.Router();

// Create a new product
router.post('/crate-category', createCategory);

// Get all products
router.get('/getCategories', getAllCategories);

// Get a single product by ID
router.get('/single/:id', getCategoryById);



module.exports = router;
