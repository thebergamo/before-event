beforeEvent
========

BeforeEvent is an simple way to handle events before the trigger are called!

You can just simple call beforeEvent in your constructor and this is all you need!

```javascript
var utils = require('util');
var BeforeEvent = require('beforeEvent');
var EventEmitter = require('events').EventEmitter;

var MyEmitter = function(){
	EventEmitter.call(this);
	BeforeEvent(this);
};

utils.inherits(MyEmitter, EventEmitter);

module.exports = MyEmitter;

```

After you implement something like the code above you can now handle every event just adding "before" before the event.

Like this:

```javascript
var MyEmitter = require('./myEmitter');

var myEmitter = new MyEmitter();

myEmitter.on('beforeHello', function(msg){
	console.log(msg); //"Hello World!";
});

myEmitter.on('hello', function(msg){
	console.log(msg); //"Hello World!";
});

myEmitter.emit('hello', 'Hello World!');

```

Enjoy it!
