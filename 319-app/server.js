import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import matchaRouter from './routes/matcha/matcha-router.js';
import Recipes from './models/matcha/post-recipes.js';  // Keep if /Recipes is used
import { seedMatcha } from "./controllers/matcha/matcha-controllers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// MW
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.log('Uh-Oh! looks like we spilled some Matcha:', err));

// Use matcha router (for /matcha routes)
app.use('/matcha', matchaRouter);   // lowercase URL path

// Seed Route
app.get('/matcha/seed', async (req, res) => {
  try {
    await seedMatcha();
    res.status(200).send("Match Recipes seeded successfully!");
  } catch (error) {
    res.status(500).json({ message: "Error seeding the DB", error: error.message });
  }
});

// Root Route
app.get('/', (req, res) => {
  res.send("Everything Matcha 🍵");
});

// User Page
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Welcome to the Matcha Platform, ${userId}. Let's whisk something up!`);
});

// Recipes Page (uses Recipes model)
app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipes.find({});
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error with the Matchas", error: error.message });
  }
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Uh oh... matcha overflow detected.");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});