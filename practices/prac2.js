var counter = function(arr){
    return 'There are '+ arr.length +' elements in this array';
};

//console.log( counter(['shaghil','shk','sonu']));
module.exports.adder= function(a,b){
    return `The sum of the two number is ${a+b}`;
};

var pi = 3.14;



//module.exports = counter;
module.exports.counter=counter;

module.exports.pi=pi;
/* type 3::

module.exports = {
    counter: this.counter,
    adder: this.adder,
    pi: pi

};*/


//Different ways in which we can export from a module in js