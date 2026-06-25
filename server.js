require('dotenv').config();
const PORT = process.env.PORT || 9950
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const corsOptions = require('./config/corsOptions');
const credentials = require('./Middleware/credentials');
const inventory = require('./controller/produceController').getAllProduce;
const {logger} = require('./Middleware/logEvents');

connectDB(); // connect to database

app.use(credentials);

app.use(cors(corsOptions));

app.use(logger);

app.use(express.json());

app.use(cookieParser()); // built-in middleware to handle cookies

app.use('/inventory', require('./controller/produceController').getAllProduce);

app.use('/register', require('./route/register'));
app.use('/auth', require('./route/auth'));
app.use('/logout', require('./route/logout'))
app.use('/refresh', require('./route/refresh'))

app.use(require('./Middleware/verifyJWT')) // AccessToken is needed to access routes below this one

app.use('/stock', require('./route/inStock'));



// Server will only run if database is connected
mongoose.connection.once('open', ()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)});
})
