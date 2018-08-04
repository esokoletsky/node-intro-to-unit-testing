const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

	it('should return fizz-buzz for multiples of 15', function() {
		[15, 30, 45].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz-buzz');
		});
	});

	it('should return fizz for multiples of 3', function(){
		[3, 6 ,9, 12].forEach(function(input){
			expect(fizzBuzzer(input)).to.equal('fizz');
		});
	});

	it('should return buzz for multiples of 5', function(){
		[5, 10, 15, 20].forEach(function(input){
			expect(fizzBuzzer(input)).to.equal('buzz');
		});
	});

	it('should return a number if not multiples of 3 or 5', function(){
		[7, 11, 13, 16].forEach(function(input){
			expect(fizzBuzzer(input)).to.equal(input);
		});
	});

	it ('should equall a number', function(){
		[true, false, 'cup'].forEach(function(input){
			expect(fizzBuzzer(input)).to.throw(Error);
		});
	});

});