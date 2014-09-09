// test use cases - weather.js APIs 
var chai = require('chai');
var weather = require('../api/weather.js');

describe('OpenWeatherMap ', function(){
	describe('Connection :', function(){
		it('Should connect with the OpenWeatherMap APIs Services ', function(done){
			weather.getResponseCode(function(status){
			chai.assert.equal(status, 200);
			done();
			});
		});
	})

	describe('Settings :', function(){
		it('Should set the language to Italia (it) ', function(){
			weather.setLang('it');
			chai.assert.equal('it', weather.getLang().toLowerCase());
		});

		it('Should set the units to metric  ', function(){
			weather.setUnits('metric');
			chai.assert.equal('metric', weather.getUnits().toLowerCase());
		})

		it('Should set the City to Fairplay ', function(){
			weather.setCity('Fairplay');
			chai.assert.equal('fairplay', weather.getCity().toLowerCase());
		})

		it('Should set format data to XML  ', function(){
			weather.setFormat('xml');
			chai.assert.equal('xml', weather.getFormat().toLowerCase());
		})

		it('Should set the APPID ', function(){
			weather.setAPPID('XNDON1111111111');
			chai.assert.equal('XNDON1111111111', weather.getAPPID());
		})
	})

	describe('Retrive data : ', function(){
		it('Should retrive temperature data ', function(done){
			weather.getTemperature(function(temp){
				chai.assert.typeOf(temp , 'number');
				done();
			});
		});
	});	

});