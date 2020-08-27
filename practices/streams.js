var http = require('http');
var fs = require('fs');

//                                  this is to make a string of path using current dir name/*/
var readStream  = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); 

// createReadStream inherits from eventEmitter and there is an event called data
// which allows us to listen to when we recieve any kind of data or a small chunk of it


// readStream.on('data', function(chunk){
//     console.log('new chunk received: ');
//     console.log(chunk);
// });

// so here we are reading the data in chunks and printing it on colsole

var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// readStream.on('data', function(chunk){
//     console.log('new chunk received: ');
//     writeStream.write(chunk);
// });

// here we are getting data from readme file in chunk and writing those chunks in 
// writeme one by one using writeStreams.

/* pipes
pipe can be used to directly transfer the data from write stream to read stream without
listenning for it ourself and doing it. pipe does it for us automatically.
pipe() metod is only used in a readable stream as it is from read to write stream.
*/

readStream.pipe(writeStream); //<- this does all the thing that we did above

