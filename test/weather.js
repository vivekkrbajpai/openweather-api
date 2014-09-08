// test use cases - weather.js APIs 
var chai = require('chai');
var weather = require('../api/weather.js');

describe('OpenWeatherMap', function(){

		it('Should connect with the OpenWeatherMap APIs Services ', function(done){
			weather.getRequestStatus(function(status){
				chai.assert.equal(status, 200);
				done();
			});
		});

});