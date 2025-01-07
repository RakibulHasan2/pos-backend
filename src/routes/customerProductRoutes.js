// routes/customerProductRoutes.js
const express = require("express");
const router = express.Router();
const { createCustomerProduct } = require("../../src/controllers/customerProductController");

router.post("/createCustomerProduct", createCustomerProduct);

module.exports = router;
