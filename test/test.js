var poparr = require(__dirname + '/../lib/poparr.js');
var pusharr = require(__dirname + '/../lib/pusharr.js');
var shiftarr = require(__dirname + '/../lib/shiftarr.js');
var unshiftarr = require(__dirname + '/../lib/unshiftarr.js');
var unique = require(__dirname + '/../lib/unique.js');
var freq_2 = require(__dirname + '/../lib/freq_2.js');

var expect = require('chai').expect;

describe('pop function', function() {
	it('should return 4 from [1, 2, 3, 4]', function() {
		expect (poparr.popB([1,2,3,4])).to.eql([1,2,3,4].pop());
	});
});

describe('push function', function() {
	it('should return [1, 2, 3, \'b\'] given [1, 2, 3] and \'b\'', function() {
		expect(pusharr.pushB([1,2,3], 'b')).to.eql([1,2,3].push('b'));
	});
});

describe('shift function', function() {
	it('should return 1 from {1, 2, 3, 4', function() {
		expect(shiftarr.shiftB([1,2,3,4])).to.eql([1,2,3,4].shift());
	});
});

describe('unshift function', function() {
	it('should add an element to the beginning of an array', function() {
		var array = [1,2,3,4,5];
		expect(unshiftarr.unshiftB(array, 0)).to.eql([0,1,2,3,4,5]);
		expect(array.length).to.eql(6);
		expect(array[0]).to.eql(0);
	});
});

describe('unique function', function() {
	it('should return [1, 2, \'b\' null] from [1, 2, \'b\', 1, null, 1 null]', function() {
		expect(unique([1, 2, 'b', 1, null, 1, null])).to.eql([1, 2, 'b', null]);
	});
});

describe('freq_2 function', function() {
	it('should return the most common letter (anywhere in a word)', function() {
		var wordArray = ['a', 'an', 'no', 'or'];
		expect(freq_2.freq2('tennessee')).to.eql('e');
	});
});