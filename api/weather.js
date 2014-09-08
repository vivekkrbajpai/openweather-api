// weather.js - APIs for openweathermap.org 
(function(){

	// main settings 
	var http = require('http');
	var options = {
		host : 'api.openweathermap.org', 
		path: '/data/2.5/find?q=Gandino&units=metric'
	};
	

	
	exports.getStatus = function(callback){
		getS(callback);
	}

	function getS(callback){
		var req = http.get(options, function(res) {
		// console.log('STATUS: ' + res.statusCode);
		return callback(res);
		});
	} 

})();