var express = require('express');

var app = express();
// now all the things that express has to offer are up and running 
// and it is available in app variable

app.get('/', function(req,res){
    res.send('this is the home page');
});

app.get('/contact', function(req,res){
    res.send('this is the contact page');
});
 
/*
express has methods like get, post , delete. that we can use directly
we can give the route with this methods and also pass a function which will be call when 
a request has mapped to that particular route.
express also extends the functionality of req, res object as we can see
using send method it can directly think what is content type and header accordingly
*/

app.listen(3000);