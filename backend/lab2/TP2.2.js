var EventEmmitter = require('events').EventEmitter;
var util = require = require('util');

var person = function(name)
{
    this.name = name;
};

util.inherits(person, EventEmmitter);

var ben = new person("Ben Franklin");

ben.on('speak', function(said){
    console.log(`${this.name}: ${said}`);
});

ben.emit('speak',"You may delay, but time will not.");