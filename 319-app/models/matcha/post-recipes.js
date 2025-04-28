import mongoose from "mongoose";
import User from './user.js'


const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
    ingredients: [
    { ingredientName: { type: String, required: true },
    quantity:
    {type: String, required: true },
 },],
 
 User:{ type:mongoose.Schema.Types.ObjectId, ref:'User', required: true },
 isIced:
  {type: Boolean, default: true },
 
},{ timestamps: true,
});

const Recipes = mongoose.model('Recipe', recipeSchema);

export default Recipes;