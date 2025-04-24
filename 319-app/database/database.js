import {config} from 'dotenv'; config();
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI); //Creates a connection

mongoose.connection.once('open'), () => {
    console.log(`MongoDB Connected: ${mongoose.connection.name}`);
}