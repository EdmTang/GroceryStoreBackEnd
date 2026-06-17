require('dotenv').config();
const PORT = process.env.PORT || 9950
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');

connectDB(); // connect to database

app.use(express.json());

app.use('/stock', require('./route/inStock'));

// Server will only run if database is connected
mongoose.connection.once('open', ()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)});
})
