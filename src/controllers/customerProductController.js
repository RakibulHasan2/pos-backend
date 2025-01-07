const CustomerProduct = require('../../src/models/CustomerProductModel');  // Import your model

exports.createCustomerProduct = async (req, res) => {
  try {
    // Destructuring input fields from the request body
    const {
      customer_name,
      customer_email,
      customer_phone,
      customer_address,
      purchase_date,
      purchased_products,
      total_item,
      grand_total,
      customer_point,
    } = req.body;

    // Convert total_item to a number and validate it
    const totalItem = Number(total_item);
    if (isNaN(totalItem) || totalItem <= 0) {
      return res.status(400).json({ message: "Invalid total item value." });
    }

    // Calculate customer_point if it's not provided in the request
    const calculatedCustomerPoint = customer_point || totalItem * 100;

    // Check for unique email and phone
    const emailExists = await CustomerProduct.findOne({ customer_email });
    const phoneExists = await CustomerProduct.findOne({ customer_phone });

    if (emailExists || phoneExists) {
      return res.status(400).json({ message: "Email or Phone already exists. Please use unique values." });
    }

    // Create new CustomerProduct using your model
    const newCustomerProduct = new CustomerProduct({
      customer_name,
      customer_email,
      customer_phone,
      customer_address,
      purchase_date,
      purchased_products,
      total_item: totalItem,
      grand_total: Number(grand_total), // Ensure grand_total is treated as a number
      customer_point: calculatedCustomerPoint,
    });

    // Save the new customer product to the database
    await newCustomerProduct.save();

    // Respond with the newly created customer product
    res.status(201).json({
      message: "Customer Product saved successfully",
      data: newCustomerProduct,
    });

  } catch (error) {
    console.error("Error saving customer product:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
