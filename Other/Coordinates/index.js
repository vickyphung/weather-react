import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import Current from '../Current';
import Nav from '../Nav';

function Coordinates(props) {

    const [weatherData, setWeatherData] = useState({}); 

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
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latAndLon.lat}&lon=${latAndLon.lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      setWeatherData(response.data)
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
  
  //test prop for test prop passing
  const blue = "Prop from home to current as Blue"


  return (
    <div className="Container">
    
        <div className="homeContent">      
        {console.log("weather data FETCHED")}

        {/* passes weatherData we got from fetching to Current component */}
        {(typeof weatherData.main != 'undefined') ? (
            <Current currentData={weatherData}/>
        ): (
            <div></div>
        )}

        {/* <div>
            <p className="weatherForm">
                Weather by Coordinates
            </p>
            <form onSubmit={handleSubmit}>
                <input name="lat" id="lat" placeholder="latitude" onChange={handleChange} /> <br></br>
                <input name="lon" id="lon" placeholder="longitude" onChange={handleChange} /> <br></br>
                <input type="submit" />
            </form>
        </div> */}



        {/* testing prop passing
         <div> <Current blue={blue} /> </div>
        */}


          </div>
        </div>
      );
    }

export default Coordinates;