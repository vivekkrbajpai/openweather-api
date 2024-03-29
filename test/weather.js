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
		it('Should retrive pressure data ', function(done){
			weather.getPressure(function(pres){
				chai.assert.typeOf(pres , 'number');
				done();
			});
		});
		it('Should retrive humidity data ', function(done){
			weather.getHumidity(function(hum){
				chai.assert.typeOf(hum , 'number');
				done();
			});
		});
		it('Should retrive brief description of the weather ', function(done){
			weather.getDescription(function(desc){
				chai.assert.typeOf(desc  , 'string');
				done();
			});
		});

		it('Should present all the JSON Weather response data ', function(done){
			weather.getAllWeather(function(jsonObj){
				chai.assert.property(jsonObj , 'weather');
				done();
			});
		});
		it('Should return a smart JSON weather object ', function(done){
			weather.getSmartJSON(function(smart){
				chai.assert.property(smart, 'temp');
				chai.assert.property(smart, 'humidity');
				chai.assert.property(smart, 'pressure');
				chai.assert.property(smart, 'description');
				done();
			})
		})
	});	

});