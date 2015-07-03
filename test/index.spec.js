var expect = require('chai').expect;
var BEmitter = require('./bEmitter.js');

describe('beforeEvent', function(){
	var bEmitter;
	before(function(){
		bEmitter = new BEmitter();
	});
	describe('should have a message received before an event emitted', function(){
		var data;
		before(function(done){
			bEmitter.on('beforeAwesome', function(msg){
				data = msg;
				done();
			});

			return bEmitter.emit('awesome', 'Hello world');
		});

		it('should have the correct message', function(){
			expect(data).to.be.eql('Hello world');	
		})
	});
});
