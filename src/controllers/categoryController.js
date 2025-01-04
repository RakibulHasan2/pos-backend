const Categories = require('../../src/models/categoryModel');

// Create a new product
const createCategory = async (req, res) => {
    try {
        const {
            category_name
        } = req.body;

        // Validate required fields
        if (!category_name) {
            return res.status(400).json({ message: 'All required fields must be provided.' });
        }

        // Create the product
        const newCategory = await Categories.create({
            category_name
        });

        res.status(201).json({
            message: 'Category created successfully',
            category: newCategory,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all categories
const getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.find();
        res.status(200).json({
            message: 'All Categories retrieved successfully.',
            totalCategories: categories.length,  // Number of categories
            categories: categories
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    createCategory,
    getAllCategories
};
