bY ZIP
https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
Please note if country is not specified then the search works for USA as a default.
https://api.openweathermap.org/data/2.5/weather?zip=22312,us&appid=67811363e42214b8de335480014f721e

USE DIRECT GEOCODING TO GO FROM ZIP/CITY/STATE -> DETAILED HOURLY/DAILY
need to convert zip/city/state to lat and lon, then use lat and lon to fetch from ONECALL.
http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}
https://openweathermap.org/api/geocoding-api#direct_zip


Current weather
Hourly forecast for 48 hours
Daily forecast for 7 days

zip code

air quality index
moon phase pictures
sun position graph


&exclude=hourly,daily,minute

&units={units}
standard, metric and imperial
For temperature in Fahrenheit and wind speed in miles/hour, use units=imperial
For temperature in Celsius and wind speed in meter/sec, use units=metric
Temperature in Kelvin and wind speed in meter/sec is used by default, so there is no need to use the units parameter in the API call if you want this

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}





https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}




http://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units={units}

standard, metric and imperial

For temperature in Fahrenheit and wind speed in miles/hour, use units=imperial
For temperature in Celsius and wind speed in meter/sec, use units=metric
Temperature in Kelvin and wind speed in meter/sec is used by default, so there is no need to use the units parameter in the API call if you want this



only_current	optional	By using this parameter you can exclude full historical weather data for the specified day, but received the data for only the specified timestamp. If the user specifies this parameter, then the API response will contain only the current section.

To activate this option, please use default value only_current = {true}.





https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}





SEVEN Components
Use React Router
Must use either useContext, useReducer, or both at least once!


Use an external API
Pass Props
Have at least one FORM
Must use either useContext, useReducer, or both at least once!


You CAN add to your mid mod project. HOWEVER -- You must add more FUNCTIONALITY as well. Add another feature or two, possibly another API that works with it, or just more stuff with the API you used!