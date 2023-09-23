const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require("fs");

var articlesRouter = require('./routes/article');
var storiesRouter = require('./routes/story');
var quizesRouter = require('./routes/quiz');
var usersRouter = require('./routes/user');

const app = express()

app.use(bodyParser.json({ limit: "50mb" }))

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))



app.use(function (req, res, next) {

    // Website you wish to allow to connect
    const allowedOrigins = ['http://127.0.0.1:5502', 'http://localhost:5500', 'http://127.0.0.1:5501'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/articles', articlesRouter);
app.use('/stories', storiesRouter);
app.use('/quizes', quizesRouter);
app.use('/users', usersRouter);




// mongoose.connect('mongodb+srv://shreyalahirisp:sushi080693@cluster0.yykawl0.mongodb.net/NODE-API?retryWrites=true&w=majority')
    mongoose.connect('mongodb+srv://sneha:sneha@cluster0.rodg8nr.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected!')
        app.get('/', (req, res) => {
            res.send("Hello from Backend")
          });


        app.listen(3000, () => {
            console.log('Node API is running on port 3000')
        })
    }
    );




