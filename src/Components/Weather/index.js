import { useEffect, useState } from 'react'
import axios from 'axios'
import Daily from '../Daily'
import Hour from '../Hour'
import Current from '../Current'
import './styles.css'

function Weather(props) {

  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
        if (props.lat && props.lon) {
          console.log('Weather Data being fetched. Lat/Lon props passed');
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&units=imperial&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_KEY}`)
          const weatherResponse = response.data
          setWeatherData({
            current: weatherResponse.current,
            hourly: weatherResponse.hourly,
            daily: weatherResponse.daily
          })
          console.log(weatherResponse)
        }
      }
    fetchData();
  }, [props.lat, props.lon])

  return (
    <div className="weather">
      
        {(typeof weatherData.current != 'undefined') ? (
            <Current currentData={weatherData.current}/>
        ): (
            <div></div>
        )}


        {(typeof weatherData.hourly != 'undefined') ? (
            <Hour hourData={weatherData.hourly}/>
        ): (
            <div></div>
        )}
        

        {(typeof weatherData.daily != 'undefined') ? (
            <Daily dailyData={weatherData.daily}/>
        ): (
            <div></div>
        )}

   </div>
  );
}

export default Weather;

