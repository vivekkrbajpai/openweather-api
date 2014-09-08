// index.js  -  main file 
var weather = require('./api/weather.js');


weather.getResponseByField('statusCode', function(status){
	console.log(status);
});

weather.getDataByField('ciao', function(data){
	console.log(data);
})