console.log("hey its working now, kets get started!");
// V8 is the javascript engine which runs node js code, V8 is developped by google as an open source 
// node js is written in c++
// In node there is global object i.e we can directly use the components of the global object in node file ex console.log(), setTimeOut etc.

console.log(__dirname);
console.log(__filename);

setTimeout(function(){
    console.log('3 sec have passed');
},3000);



var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log(time + ' sec have passed');
    if(time>5){
        clearInterval(timer);
    }
},2000);