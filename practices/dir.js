var fs = require ('fs');

// sync version to create directories


//fs.mkdirSync('stuff');

//fs.rmdirSync('stuff');

// async version 
/*
fs.mkdir('stuff', function(){
    fs.readFile('writeMe.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/readMe.txt', data, function(){});
    });
});
*/
fs.unlink('./stuff/readMe.txt', function(){
    fs.rmdir('stuff', function(err){});
});