// weather.js - APIs for openweathermap.org 
(function(){

	// main settings 
	var http = require('http');
	var options = {
		host : 'api.openweathermap.org', 
		path: '/data/2.5/find?q=Gandino&units=metric'
	};


	// get Response by field (satusCode, )
	exports.getResponseByField = function(thing, callback){
		getResponseBF(thing, callback);
	}

	// get Data by field ()
	exports.getDataByField = function(field, callback){
		getDataBF(field, callback);
	}


	function getWeatherByCity(city, callback){

	}



	function getResponseBF(field,callback){
		var req = http.get(options, function(res){
			res.on('data', function(){

			});
			return callback(res[field]);
		})
	}

	function getDataBF(field,callback){
		var req = http.get(options, function(res){
			res.setEncoding('utf8');
			res.on('data', function (chunk) {
			  	return callback(JSON.parse(chunk).message);
			});
			
		});
	}



})();