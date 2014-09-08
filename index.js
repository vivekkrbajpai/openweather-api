// index.js  -  main file 
var weather = require('./api/weather.js');

weather.getStatus(function(res){
	console.log(res.statusCode)
	res.destroy();
});