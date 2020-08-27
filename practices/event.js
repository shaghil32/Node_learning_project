// So here we learned about events, made our custom events, and ways to crate events
//util module was used to inherit the even emitter on the person constructor
// so that each person object inherits this.
// then we listen for these events using .on and gave response when called.

var events = require('events');
var util = require('util');


var myEmitter =  new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
    console.log(msg);
});

myEmitter.emit('someEvent', 'the event is being emitted');

var person = function(name){
    this.name = name;
};

util.inherits(person, events.EventEmitter);

var james = new person('james');
var mary = new person('mary');
var shagy = new person('shagy');

var people = [james, mary, shagy];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said '+ msg);
    })
});

james.emit('speak', 'hey dude');
mary.emit('speak', 'hey there ');