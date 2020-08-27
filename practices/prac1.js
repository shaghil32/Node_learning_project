// normal function statement


function call(fun){
    fun();
}

function say(){
    console.log("hello!");    
}
 
say();

var hi = function(){
    console.log("hi!");    
}
 
hi();

call(say);