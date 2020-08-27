var fs = require ('fs');

//                           nam eof file,  encodeing scheme
var readMe = fs.readFileSync('readme.txt', 'utf8');
console.log(readMe);
//                name of file, what to write
//fs.writeFileSync('writeMe.txt', readMe);

//the above code is blocking means first it will read  then only the 
// execution move forwards

//         name of file, encoding,  what to do in function
fs.readFile('readme.txt', 'utf8', function(err, data){
    console.log(data);
});

console.log('test');

// the above call is async means it will not stop the execution 
// for reading rather it will keep reading in background and
// give the cursor back for next line. so test will get prined 
// first here then after reading is complete then its wiill print
fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data, function(){
        console.log('complete!');
    });
});
console.log('test2');
fs.unlink('readme.txt', function(){});