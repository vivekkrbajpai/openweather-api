// index.js  -  main file 
var weather = require('./api/weather.js');

weather.getStatus(function(status){
	console.log(status)
});