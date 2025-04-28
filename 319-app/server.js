import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import expressLayouts from 'express-ejs-layouts'
import matchaRouter from './routes/matcha/matcha-router.js';

dotenv.config();

const app= express();
const PORT= process.env.PORT || 3000 //I want the value to come from my port valuable but if not send it to 3001(conditional assignment)

//MW
app.use(express.urlencoded({ extended:true}));
app.use(express.json());


//DB Connect
mongoose.connect(process.env.MONGO_URI)
.then(() => ('Connection Successful!'))
.catch((err) => console.log('Uh-Oh! looks like we spilled some Matcha', err));

// matcha router referencing match-router and matcha controllers file
app.use('/matcha/', matchaRouter);

//routes
app.get('/', (req,res) => {
    res.send("Everything Matcha");
});
// User page
app.get('/user/:id', (req,res) => {
    const userId=req.params.id;
    res.send(`Welcome to the Matcha Platform, ${userId}. Let's whisk something up!`);
});


//Global error handling
app.use((err,req,res,next) =>{
    res.status(500).send("Uh oh... matcha overflow detected. res.status not feeling the vibes.")
});


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});