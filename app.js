const express = require('express')

const app = express();

const mongoose = require ('mongoose')

const bodyParser = require('body-parser');

const cors = require('cors')

require('dotenv/config')

app.use(bodyParser.json())

//Import Routes

const postsRoute = require('./routes/post')

const homeRoute = require ('./routes/home')

//MiddleWare

app.use("/posts", postsRoute)

app.use('/home', homeRoute)

app.use(cors())







//Connect to database

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser : true},() => console.log("Connected to MongoDB"))

//Listening to server 
app.listen(3000)