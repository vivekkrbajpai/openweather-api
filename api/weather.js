// weather.js - APIs for openweathermap.org 
(function(){

	var config = {
		city : 'Fairplay',
		units : 'metric', 
		lang : 'it',
		format : 'json',
		APPID : null,

	}; 


	// main settings 
	var http = require('http');
	var options = {
		host : 'api.openweathermap.org', 
		path: '/data/2.5/find?q=Gandino&units=metric'
	};


	// exports(set)  --------------------------------------------  exports(set)  ---------------------------------------------
	exports.setLang = function(lang){
		config.lang = lang; 
	}

	exports.setCity = function(city){
		config.city = city; 
	}

	exports.setUnits = function(units){
		config.units = units;
	}

	exports.setFormat = function(format){
		config.format = format;
	}

	exports.setAPPID = function(appid){
		config.APPID = appid; 
	}

	// export(get)  ---------------------------------------------  exports(get)  ---------------------------------------------
	exports.getLang = function(){
		return config.lang; 
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




	function getTemp(callback){
		getData(function(jsonObj){
			return callback(jsonObj.list[0].id);
		})
	}

	function getResponseBF(field,callback){
		var req = http.get(options, function(res){
			res.on('data', function(){

			});
			return callback(res[field]);
		})
	}



	function getData(callback){
		// options.path = path; 
		var req = http.get(options, function(res){
			res.setEncoding('utf8');
			res.on('data', function (chunk) {

			  	return callback(JSON.parse(chunk));
			});
		});
	}



})();