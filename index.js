var Inflector = require('inflected');

module.exports = function(emitter){
	var oldEmitter = emitter.emit;

	emitter.emit = function(){
		var event = Inflector.camelize('before_' + arguments[0], false);
		var args = Array.prototype.slice.call(arguments);

		args.shift();

		oldEmitter.apply(emitter, [event].concat(args))
		oldEmitter.apply(emitter, arguments);

		return;	
	};
};
