var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    res.writeHead(200, {'Content-Type': 'text/json'});// change json here for brower
    var myObj = {
        name: 'shaghil',
        job: 'SRE',
        age: 24
    }
    res.end(JSON.stringify(myObj));
    // as myObj is object we have to serialize it and convert to json string. using 
    // JSON.stringify
});

server.listen(3030, '127.0.0.1');
console.log('listenning on port 3030:')