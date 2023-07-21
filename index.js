const express = require('express')
const app = require('./src/app.js')
const mongoose = require('mongoose')
const port = 5000
require('dotenv').config({path:'./config.env'})


// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
//const DATABASE_URL = "mongodb://localhost/subscribers";
const DATABASE_URL=process.env.MONGODB_DATABASE_URL;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log(`connection successfull to DB`)
}).catch((err)=>console.log(err))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
