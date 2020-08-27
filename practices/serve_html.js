var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});// change html here for brower
    var readStream  = fs.createReadStream(__dirname + '/index.html', 'utf8'); 
    // change the filename to index.html and done
    readStream.pipe(res);
});

server.listen(4000, '127.0.0.1');
console.log('Server is listenning on port 4000:');
/*
here we are reading from a read stream and piping it to the res object.
res object is write stream so we can easily pipe it.
*/