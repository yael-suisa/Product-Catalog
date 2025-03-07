const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const app = require("../server"); // אם יש לך קובץ server.js שמייצא את ה-app

describe("API Tests", () => {
  beforeAll(async () => {
    // חיבור ל-MongoDB, במקום MongoDB המקומי תוכל להשתמש ב-MongoDB Atlas אם צריך
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // ניתוק מ-MongoDB בסיום הבדיקות
    await mongoose.disconnect();
  });

  it("should get all products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should get a product by id", async () => {
    const product = await request(app).post("/api/products").send({
      name: "Product 1",
      description: "A test product",
      price: 100,
    });
    
    const productId = product.body._id;  // מוציא את ה-ID של המוצר

    const response = await request(app).get(`/api/products/${productId}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Product 1");
  });

  it("should return 404 for non-existing product", async () => {
    const response = await request(app).get("/api/products/non-existing-id");
    expect(response.status).toBe(404);
  });

  it("should post a review", async () => {
    const product = await request(app).post("/api/products").send({
      name: "Product for Review",
      description: "Test product for review",
      price: 50,
    });

    const productId = product.body._id;

    const review = {
      text: "This is a great product!",
    };

    const response = await request(app)
      .post(`/api/reviews/${productId}`)
      .send(review);

    expect(response.status).toBe(200);
    expect(response.body.text).toBe(review.text);
  });
});