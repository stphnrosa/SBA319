import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
    ingredients: [
    { ingredientName: { type: String, required: true },
    quantity:
    {type: String, required: true },
 }],
 isIced:
  {type: Boolean, default: true },
 
},{ timestamps: true,
});

const Recipes = mongoose.model('MatchaLatte', recipeSchema);

export default Recipes;