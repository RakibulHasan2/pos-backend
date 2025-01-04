const Product = require('../../src/models/productModel');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const {
            p_name,
            p_category,
            p_brand,
            p_quantity,
            p_price,
            p_cost,
            p_images,
            p_unit,
            tax,
            tax_method,
            p_details,
        } = req.body;

        // Validate required fields
        if (!p_name || !p_category || !p_brand || !p_quantity || !p_price || !p_cost || !p_unit || !tax) {
            return res.status(400).json({ message: 'All required fields must be provided.' });
        }

        // Create the product
        const newProduct = await Product.create({
            p_name,
            p_category,
            p_brand,
            p_quantity,
            p_price,
            p_cost,
            p_images,
            p_unit,
            tax,
            tax_method,
            p_details,
        });

        res.status(201).json({
            message: 'Product created successfully',
            product: newProduct,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single product by ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({
            message: 'Product updated successfully',
            product: updatedProduct,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
