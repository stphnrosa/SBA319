import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import matchaRouter from './routes/matcha/matcha-router.js';
import Recipes from './models/matcha/post-recipes.js';
// import Matcha from './models/matcha/matcha-model.js'; // capital M for matcha since that's how it's referenced in the match-model file (this stayed unhighlighted, not sure why)
import {seedMatcha} from "./controllers/matcha/matcha-controllers.js"; //must be in curly brckets bc thats how its set up in matcha controller file

dotenv.config();

const app= express();
const PORT= process.env.PORT || 3000; //I want the value to come from my port valuable but if not send it to 3001(conditional assignment)

//MW
app.use(express.urlencoded({ extended:true}));
app.use(express.json());


//DB Connect
mongoose.connect(process.env.MONGO_URI)
.then(() => ('Connection Successful!'))
.catch((err) => console.log('Uh-Oh! looks like we spilled some Matcha', err));

// matcha router referencing match-router and matcha controllers file
app.use('/Matcha/', matchaRouter);

//seed route
app.get('./matcha/seed', async (req,res) => {
    try{ await seedMatcha();
        res.status(200).send("Match Recipes connected!!")
    } catch (error) {
        res.status (500).json({message:"Error seeding the DB", error: error.message});
    }
});

//routes
app.get('/', (req,res) => {
    res.send("Everything Matcha");
});

// User page
app.get('/user/:id', (req,res) => {
    const userId=req.params.id;
    res.send(`Welcome to the Matcha Platform, ${userId}. Let's whisk something up!`);
});

//Recipe page!!!!
app.get('/Recipes/',async (req,res) => {
   try{
    const recipes= await Recipes.find({});
    res.status(200).json(recipes);
} catch (error) {
    res.status(500).json({ message: " Error with the Matchas", error: error.message});
}
});

//Global error handling
app.use((err,req,res,next) =>{
    res.status(500).send("Uh oh... matcha overflow detected.")
});


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});