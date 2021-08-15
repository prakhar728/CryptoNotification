const express = require('express');
const mongoose = require('mongoose');
const dotenv= require('dotenv');


const assetDisplay = require('./Routes/assetDisplay.js');
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser : true, useUnifiedTopology: true},()=>{
    console.log('Connected to DB successfully');
})

app.use('/assetDisplay',assetDisplay);
app.listen(3000,()=>{
    console.log('Listeing on PORT 3000');
})