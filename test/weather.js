// test use cases - weather.js APIs 
var chai = require('chai');
var weather = require('../api/weather.js');

describe('OpenWeatherMap', function(){
	describe('Communication ', function(){
		it('Should connect with the OpenWeatherMap APIs Services ', function(){
			chai.assert.equal(weather.connect, 'ok');
		});

		// it('Should ')
	});
});