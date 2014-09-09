// index.js  -  main file 

var weather = require('./api/weather.js');


weather.getResponseCode(function(status){
	console.log(status);
});

weather.setCity('Fairplay');

weather.getTemperature(function(temp){
	console.log(temp);
})