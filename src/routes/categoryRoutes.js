const express = require('express');
const {
    createCategory,
    getAllCategories,
    getCategoryById
} = require('../../src/controllers/categoryController');

const router = express.Router();

// Create a new category
router.post('/crate-category', createCategory);

// Get all categories
router.get('/getCategories', getAllCategories);

// Get a single category by ID
router.get('/single/:id', getCategoryById);



module.exports = router;
