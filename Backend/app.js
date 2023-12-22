const express = require('express');
const cors = require('cors');
const errormiddleware = require('./middleware/error');

const app = express();
const cookieparser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(cookieparser());

// Route Imports
const Product = require('./Routes/ProductRoute');
const user = require('./Routes/userRouth');
const order = require('./Routes/orderRouthe');

app.use('/api/v1', user);
app.use('/api/v1', Product);
app.use('/api/v1', order);

// Middleware error
app.use(errormiddleware);

module.exports = app;
