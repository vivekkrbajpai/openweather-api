OpenWeatherMap.org APIs 
=======================


### Intro 
Simple abstraction layer for use the services offered by the OpenWeatherMap.org website through its API's. You 
can easy reach the weather informations you need on over 400k weather stations. 

### Installation 

	npm install openweather-api --save


### How to Use 

Install the package with npm, import with the require statment in the app and start to use the apis. First 
step is to set the params for the request : 

	var weather = require('weather-api');

	weather.setLang('it'); 
	// English - en, Russian - ru, Italian - it, Spanish - es (or sp), Ukrainian - uk (or ua), German - de, Portuguese - pt,Romanian - ro, Polish - pl, Finnish - fi, Dutch - nl, French - fr, Bulgarian - bg, Swedish - sv (or se), Chinese Traditional - zh_tw, Chinese Simplified - zh (or zh_cn), Turkish - tr, Croatian - hr, Catalan - ca

	weather.setCity('Fairplay');

	// 'metric'  'internal'  'imperial'
 	weather.setUnits('metric'); 

 	weathersetAPIID




### Current Weather Data
Using the following requests to API you can get current weather data for any location on the Earth. Current weather data are updated in real time based on data from global weather providers and more than 40,000 weather stations. Weather data is available in JSON.

### Methods 
Import the module and start to use the functions : 

	// get the HTTP  statusCode of the response es. 200 
	exports.getResponseCode = function(callback){
		getResponseBF('statusCode', callback);
	}



### Hystorical Data  (TODO)

	
### Geographic location (TODO)