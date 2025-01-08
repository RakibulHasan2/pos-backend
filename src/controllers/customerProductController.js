const CustomerProduct = require('../../src/models/CustomerProductModel');

const createCustomerProduct = async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
      purchaseDate,
      purchasedProducts,
      grandTotal,
      totalItems,
      paymentStatus,
    } = req.body;

    // Check if the email or phone already exists
    // const existingCustomer = await CustomerProduct.findOne({
    //   $or: [
    //     { customerEmail },
    //     { customerPhone },
    //   ],
    // });

    // if (existingCustomer) {
    //   return res.status(400).json({
    //     message: "Customer with this email or phone number already exists.",
    //   });
    // }

    // Calculate customer points
    const customerPoints = totalItems * 100;

    // Create a new customer product entry
    const newCustomerProduct = new CustomerProduct({
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
      purchaseDate, // Include this field
      purchasedProducts,
      grandTotal,
      totalItems,
      customerPoints,
      paymentStatus,
    });
    
    // Save the customer product to the database
    await newCustomerProduct.save();

    res.status(201).json({
      message: "Customer product created successfully.",
      data: newCustomerProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create customer product.",
      error: error.message,
    });
  }
};

module.exports = { createCustomerProduct };
