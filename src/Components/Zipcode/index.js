import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import Current from '../Current';


function Zipcode(props) {

    const weather_url = 'https://api.openweathermap.org/data/2.5/weather?'
    
    const [weatherData, setWeatherData] = useState({}); 

    const [formData, setFormData] = useState({
        zipcode: ""
    })

    const [zipcode, setZipcode] = useState('')
      

  useEffect(() => {
    const fetchData = async () => {
      console.log('test');
      const response = await axios.get(`${weather_url}zip=${zipcode},us&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      setWeatherData(response.data)
      console.log(weatherData)
    }
    fetchData();
  }, [zipcode])


  const handleChange = (event) => {
    setFormData(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setZipcode(formData)
  }
  
//   //test prop for test prop passing
//   const blue = "Prop from home to current as Blue"


  return (
    <div className="homeContainer">
        <div className="homeContent">      
        {console.log("weather data FETCHED")}

        {/* passes weatherData we got from fetching to Current component */}
        {(typeof weatherData.main != 'undefined') ? (
            <Current currentData={weatherData}/>
        ): (
            <div></div>
        )}

        <div>
            <p className="weatherForm">
                Weather by Zipcode
            </p>
            <form onSubmit={handleSubmit}>
                <input name="zipcode" id="zipcode" placeholder="enter zipcode" onChange={handleChange} /> <br></br>
                <input type="submit" />
            </form>
        </div>





          </div>
        </div>
      );
    }

export default Zipcode;