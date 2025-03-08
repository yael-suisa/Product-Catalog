const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Automatically create 10 products - for testing
router.post("/create-many", async (req, res) => {
  try {
    const products = [];
    for (let i = 1; i <= 10; i++) {
      products.push({
        id: i,
        name: `Product ${i}`,
        description: `Description for product ${i}`,
        price: Math.floor(Math.random() * 100) + 1,
      });
    }

    const createdProducts = await Product.insertMany(products);
    res.status(201).json(createdProducts);
  } catch (error) {
    res.status(500).json({ message: "Error creating products", error });
  }
});

// Receiving all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// Receiving a product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.json(product);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
