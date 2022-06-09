import { useEffect, useState } from 'react'
import axios from 'axios'
import Weather from './weather'
import './style.css'

function HomeThree(props) {

  const [weatherData, setWeatherData] = useState({})

  const [formData, setFormData] = useState({
    lat: 0,
    lon: 0
  })

  const [latAndLon, setLatAndLon] = useState({
    lat: 38.88,
    lon: -77.05
  })


  useEffect(() => {
    const fetchData = async () => {
      console.log('test');
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latAndLon.lat}&lon=${latAndLon.lon}&units=imperial&exclude=minutely&appid=788366a04033c9058cc21a81db1e1ee8`)
      const weatherResponse = response.data
      setWeatherData({
        temp: weatherResponse.current.temp,
        latitude: weatherResponse.lat,
        longitude: weatherResponse.lon,
        sunrise: weatherResponse.current.sunrise,
        sunset: weatherResponse.current.sunset, 
        feels_like: weatherResponse.current.feels_like,
        pressure: weatherResponse.current.pressure,
        humidity: weatherResponse.current.humidity,
        dew_point: weatherResponse.current.dew_point,
        uvi: weatherResponse.current.uvi,
        clouds: weatherResponse.current.clouds,
        wind_speed: weatherResponse.current.wind_speed,
        weatherMain: weatherResponse.current.weather[0].main,
        weatherDescription: weatherResponse.current.weather[0].description,
        iconCode: weatherResponse.current.weather[0].icon
      })
      console.log(weatherResponse)
      //why is weatherData diff from weather response after form input
      //why do I have to define the weatherData, why can't I leave it blank
      //weatherData doesn't console log anything on window load
      //weatherData console logs after I go to the page and then edit my code and save
      //but in the return i use weatherData to call the data
      console.log(weatherData)
      
    }
    fetchData();
  }, [latAndLon])


  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLatAndLon(formData)

  }
  

  return (
    <div className="App">

    {/* I can't pass the prop to Weather component using
        <Weather weatherData={weatherData} 
    WHY! */}

   
   
        <div>      
            <div>Latitutde: {weatherData.longitude}</div>
            <div>Latitutde: {weatherData.latitude}</div>
            <div>Temperature: {weatherData.temp} </div>
            <div>Sunrise: {weatherData.sunrise}</div>
            <div>UVI: {weatherData.uvi}</div>
            <div>Weather Main: {weatherData.weatherMain}</div>
        </div>
        

        <div>
          <p className="weatherForm">
            Want to know the weather somewhere else?
          </p>
          <form onSubmit={handleSubmit}>
            <input name="lat" id="lat" placeholder="  Latitude" onChange={handleChange} />
            <input name="lon" id="lon" placeholder="  Longitude" onChange={handleChange} />
            <input type="submit" />
          </form>
        </div>


        </div>
      );
    }

export default HomeThree;