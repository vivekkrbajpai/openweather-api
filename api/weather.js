// weather.js - APIs for openweathermap.org 
(function(){

	var config = {
		city : 'Fairplay',
		units : 'metric', 
		lan : 'it',
		format : 'json',
		APPID : null,

	}; 


	// main settings 
	var http = require('http');
	var options = {
		host : 'api.openweathermap.org', 
		path: '/data/2.5/weather?q=fairplay'
	};


	// exports(set)  --------------------------------------------  exports(set)  ---------------------------------------------
	exports.setLang = function(lang){
		config.lan = lang.toLowerCase(); 
	}

	exports.setCity = function(city){
		config.city = city.toLowerCase(); 
	}

	exports.setUnits = function(units){
		config.units = units.toLowerCase();
	}

	exports.setAPPID = function(appid){
		config.APPID = appid; 
	}

	// export(get)  ---------------------------------------------  exports(get)  ---------------------------------------------
	exports.getLang = function(){
		return config.lan; 
	}

	exports.getCity = function(){
		return config.city;
	}

	exports.getUnits = function(){
		return config.units;
	}

	exports.getFormat = function(){
		return config.format; 
	}

	exports.getAPPID = function(){
		return config.APPID;
	}


	// get Response by field (satusCode, )
	exports.getResponseCode = function(callback){
		getResponseBF('statusCode', callback);
	}

	// get temperature 
	exports.getTemperature = function(callback){
		getTemp(callback);
	}

	// get the atmospheric pressure 
	exports.getPressure = function(callback){
		getPres(callback);
	}

	exports.getHumidity = function(callback){
		getHum(callback);
	}

	exports.getDescription = function(callback){
		getDesc(callback);
	}

	exports.getAllWeather = function(callback){
		getData(callback);
	}

	exports.getSmartJSON = function(callback){
		getSmart(callback);
	}

	// active functions()  -------------------------------------  active functions()  --------------------------------------------

	function getPres(callback){
		getData(function(jsonObj){
			return callback(jsonObj.main.pressure);
		})
	}

	function getTemp(callback){
		getData(function(jsonObj){
			return callback(jsonObj.main.temp);
		})
	}

	function getHum(callback){
		getData(function(jsonObj){
			return callback(jsonObj.main.humidity);
		})
	}

	function getDesc(callback){
		getData(function(jsonObj){

			return callback((jsonObj.weather)[0].description);
		})
	}

	function getSmart(callback){
		getData(function(jsonObj){
			var smartJSON = {};
			smartJSON.temp = jsonObj.main.temp;
			smartJSON.humidity = jsonObj.main.humidity;
			smartJSON.pressure = jsonObj.main.pressure;
			smartJSON.description = (jsonObj.weather)[0].description;
			return callback(smartJSON); 
		})
	}

	function getResponseBF(field,callback){
		var req = http.get(options, function(res){
			res.on('data', function(){

			});
			return callback(res[field]);
		})
	}

	function buildPath(){

		return '/data/2.5/weather?q=' + config.city + '&units=' + config.units + '&lang=' + config.lan + '&APPID=' + config.APPID;

	}

	function getData(callback){
		options.path = buildPath();
		var req = http.get(options, function(res){
			res.setEncoding('utf8');
			res.on('data', function (chunk) {

			  	return callback(JSON.parse(chunk));
			});
		});
	}



})();