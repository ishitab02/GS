require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const profile_route = require('./routes/profile_route')
const errorMiddleware = require('./middleware/error_middleware')
var cors = require('cors')

const app = express()

const PORT=process.env.PORT || 3000
const MONGO_URL=process.env.MONGO_URL

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorMiddleware)
app.use(cors())

app.use('/api',profile_route);

app.get('/', (req, res) => {
    res.send('Success')
})

//connect to db
mongoose.
connect(MONGO_URL)
.then(()=>{
    console.log("Connected");
    app.listen(PORT,()=>{
        console.log('Active');
    })
}).catch((error) => {
    console.log(error)
}) 