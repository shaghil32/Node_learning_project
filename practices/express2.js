var express = require('express');
var bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

var urlencodedParser = bodyParser.urlencoded({extended: false});
// now all the things that express has to offer are up and running 
// and it is available in app variable

// app.get('/', function(req,res){
//     res.send('this is the home page');
// });

//send is used to send text directly sendFile is used to return a file

// app.get('/contact', function(req,res){
//     res.send('this is the contact page');
// });
app.get('/', function(req,res){
    res.render('index');
});

app.get('/contact', function(req,res){
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

// app.get('/profile/:id', function(req,res){
//     res.send('you request a profile with id '+req.params.id);
//     // here we accessed variables that are entered in url and reply 
//     //accordingly for different users
// });

app.get('/profile/:name', function(req,res){
    var data = {age:29, job: 'SRE', hobbies: ['eating','thinking','drinking','picking']};
    res.render('profile', {person: req.params.name, data: data });

});

/*ejs
we will be using ejs as template engine which will help in passing the dynamic parameters
recieved through url to the html doc to create dynamic view content.
now first we have to tell express to use ejs as our view engine which is done above using 
set method. by default express will look for views in view folder so we need to create a view folder
and 
*/

app.listen(3000);