//reference: https://www.mongodb.com/community/forums/t/how-to-reference-the-objectid-from-one-collection-schema-to-another/203108

import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
    ingredientName: {type: String, required: true},
    quantity: {type: String, required: true},
    isIced:
    {type: Boolean, default: true },
}, {_id:false });

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [ingredientSchema],
 user:{ type:mongoose.Schema.Types.ObjectId, ref:'User', required: true },
 
},{ timestamps: true,
});

const Recipes = mongoose.model('Recipes', recipeSchema);

export default Recipes;