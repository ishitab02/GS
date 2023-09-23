var express=require("express");
var bodyParser=require("body-parser");
 
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sneha:sneha@cluster0.rodg8nr.mongodb.net/?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
 
var app=express()
  
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.post('/sign_up', function(req,res){
    var first_name = req.body.first_name;
    var middle_name = req.body.middle_name;
    var last_name = req.body.last_name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;
    var sex= req.body.sex;
    var state= req.body.state;
 
    var data = {
        "first_name": first_name,
        "middle_name": middle_name,
        "last_name":last_name,
        "email":email,
        "password":pass,
        "phone":phone,
        "sex": sex,
        "state":state
    }
    db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
             
    });
         
    return res.status(200);
})
 
 
app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
return res.redirect('index.html');
}).listen(3000)
 
 
console.log("server listening at port 3000");