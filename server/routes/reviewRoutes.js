const express = require("express");
const Review = require("../models/Review");

const router = express.Router();

// Receiving a product review by ID
router.get("/:id", async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.id });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// Add review to product
router.post("/:id", async (req, res) => {
  const text = req.body.text;
  const productId = req.params.id;

  try {
    const newReview = new Review({ text, productId });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
