import express from "express";
const expressLayouts = require ('express-ejs-layouts');
import dotenv from "dotenv";
dotenv.config();

const PORT= process.env.PORT || 3000
const app= express();

//routes
app.get('/', (req,res) => {
    res.send("Everything Matcha");
});

//Global error handling
app.use((err,req,res,next) =>{
    res.status(500).send("Uh oh... matcha overflow detected. res.status not feeling the vibes.")
});
///////////////
// import Matcha from ',/models/matcha.js';
// app.posr('/rndom', async (req,res) => {
//     try{
//         const random = await
//     }
// }

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});