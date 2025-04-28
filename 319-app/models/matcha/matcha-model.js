//reference: https://stackoverflow.com/questions/77131419/how-to-specify-the-schema-for-array-of-jsons-for-intellisense
// reference: https://www.youtube.com/watch?v=ChiC7zhhQzQ
// reference: https://www.mongodb.com/community/forums/t/how-to-reference-the-objectid-from-one-collection-schema-to-another/203108

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price:{ type: Number, required: true, min: 0},
    quantity: { type: Number, required:true, min:1, max:10 },
})



const matchaSchema = new mongoose.Schema ({
    name: {type: String, required: true, lowercase:true},
    color: { type: String},
    email: { type: String, unique: true, required:true },
    cart: {type: [productSchema] }
},{
    timestamps: true 
});

//always capitalize the model, i.e. "Matcha"
const Matcha = mongoose.model('Matcha', matchaSchema);


export default Matcha;
