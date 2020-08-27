var http = require ('http');

var server = http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey shaghil');
});

server.listen(3000, '127.0.0.1');
console.log('Listenning on port 3000');

/*
it will listen to any request whcih is coming on this ip on port 3000 
i.e 127.0.0.1:3000 or 127.0.0.1:3000/anything alsi will go to this server and reply 
will be same. to do routing of this req we have to map it properly.
currently all will get the same reply
*/