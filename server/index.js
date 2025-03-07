const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config({ path: "../.env" });


// חיבור ל-MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// יצירת המודל של המוצר
const Product = mongoose.model('Product', {
  id:Number,
  name: String,
  description: String,
  price: Number,
});

const reviewSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
    productId: {
      type: Number,  // שינוי מ-ObjectId ל-String
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now, // תאריך יצירת הביקורת
    }
  });
  
  const Review = mongoose.model('Review', reviewSchema);
// Middleware להדפסת כל קריאה שמגיעה לשרת
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
  
// API - הוספת 10 מוצרים אוטומטית
app.post('/api/products/create-many', async (req, res) => {
    try {
      // יצירת 10 מוצרים עם נתונים אקראיים
      const products = [];
      for (let i = 1; i <= 10; i++) {
        products.push({
          id:i,  
          name:` Product ${i}`,
          description:` Description for product ${i}`,
          price: Math.floor(Math.random() * 100) + 1, // מחיר אקראי בין 1 ל-100
        });
      }
  
      // הוספת המוצרים למסד הנתונים
      const createdProducts = await Product.insertMany(products);
      res.status(201).json(createdProducts);  // החזרת המוצרים שנוצרו
    } catch (error) {
      res.status(500).json({ message: "Error creating products", error });
    }
  });
  
// API - לקבלת מוצרים
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

app.get('/api/products/:id', async (req, res) => {
    try {
      const products = await Product.find({ id: req.params.id }); // מחזיר מערך
      if (!products.length) {
        return res.status(404).send('Product not found');
      }
      res.json(products[0]); // שולחים את המוצר הראשון
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });

  app.get('/api/reviews/:id', async (req, res) => {
    try {
      const reviews = await Review.find({ productId: req.params.id }); // חיפוש ביקורות לפי ID מוצר
      res.json(reviews);  // אם אין ביקורות, פשוט מחזיר מערך ריק
    } catch (err) {
      res.status(500).json({ message: 'Server Error', error: err.message });
    }
  });
  
  

// API - הוספת ביקורת
app.post('/api/reviews/:id', async (req, res) => {
    const  text  = req.body.text;
    const productId = req.params.id;
  console.log(text+productId);
  
    try {
      // יצירת ביקורת חדשה ושמירתה בבסיס נתונים
      const newReview = new Review({
        text,
        productId,
      });
  
      // שמירת הביקורת
      await newReview.save();
  
      res.status(201).json(newReview); // מחזיר את הביקורת שנשמרה
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

// התחלת השרת
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
