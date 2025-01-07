const mongoose = require("mongoose");
const customerProductSchema = new mongoose.Schema({
  customer_name: { type: String },
  customer_email: { type: String },
  customer_phone: { type: String },
  customer_address: { type: String },
  total_item: { type: Number },  // Ensure it's treated as a number
  grand_total: { type: Number }, // Consider using a Number here
  customer_point: { type: Number },
  purchasedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
}, { timestamps: true });

module.exports = mongoose.model("CustomerProduct", customerProductSchema);