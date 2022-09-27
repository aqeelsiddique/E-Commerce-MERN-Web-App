const express = require('express');
const errormiddleware = require("./middleware/error")
const app= express();
const cookieparser = require('cookie-parser')

app.use(express.json());
app.use(cookieparser())
//////Routhe Import
const Product = require('./Routes/ProductRoute');
const user = require("./Routes/userRouth");
const order = require("./Routes/orderRouthe")

app.use("/api/v1", user)
app.use("/api/v1", Product)
app.use("/api/v1", order)

///middleware error


module.exports = app; 