// index.js  -  main file 

var weather = require('./api/weather.js');

weather.setCity('Gandino');

weather.getDescription(function(temp){
	console.log(temp);
});