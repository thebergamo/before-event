var utils = require('util');
var EventEmitter = require('events').EventEmitter;
var BeforeEmitter = require('../index.js');

var Emitter = function(){
	EventEmitter.call(this);
	BeforeEmitter(this);
};

utils.inherits(Emitter, EventEmitter);

module.exports = Emitter;
