import React from "react";
import './styles.css'

const Current = (props) => {
       {console.log("Made it to the Current Component")}
    if (props.currentData){
        return(
            <div className="currentDetails">
                {console.log (props)}
                {console.log('Prop Data Successfully Passed')}
                <div className='currentContent'>
                    <ul>
                        <li>Temperature: {props.currentData.temp} </li>
                        <li>Feels like: {props.currentData.feels_like}</li>
                        <li>Clouds: {props.currentData.clouds}</li>
                        <li>Dew Point: {props.currentData.dew_point}</li>
                        <li>Pressure: {props.currentData.pressure}</li>
                        <li>Humidity: {props.currentData.humidity}%</li>
                        <li>Main: {props.currentData.weather[0].main}</li>
                        <li>UVI: {props.currentData.uvi}</li>
                        <li>Description: {props.currentData.weather[0].description}</li>
                        <li>Wind Speed: {props.currentData.wind_speed}</li>
                        <li>Wind Degrees: {props.currentData.wind_deg}</li>
                        {/* changing sunrise and sunset to local time */}
                        <li>Sunrise: {new Date(props.currentData.sunrise * 1000).toLocaleTimeString('en-IN')}</li>
                        <li>Sunset: {new Date(props.currentData.sunset * 1000).toLocaleTimeString('en-IN')}</li>
                        <li>Time: {new Date(props.currentData.dt * 1000).toLocaleTimeString('en-IN')}</li>
                        <img className="weatherIcon" src={`http://openweathermap.org/img/wn/${props.currentData.weather[0].icon}@2x.png`} />
                    </ul>
                </div>
            </div>    
        )
    }
}

export default Current