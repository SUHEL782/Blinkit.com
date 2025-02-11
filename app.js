const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/mongodb.js');

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
