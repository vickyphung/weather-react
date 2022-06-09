import React from "react";


const Current = (props) => {
   
    {console.log("Made it to the Current Component")}
if (props.currentData){
    return(
        <div>
            {console.log (props)}
            {console.log('Prop Data Successfully Passed')}
         
            <div className='currentContent'>
                <div> Location: {props.currentData.name}</div>
                <div>Latitude: {props.currentData.coord.lat} </div>
                <div>Longitude: {props.currentData.coord.lon} </div>
                <div>Temperature: {props.currentData.main.temp} </div>
                <div>Feels like: {props.currentData.main.feels_like}</div>
                <div>Clouds: {props.currentData.clouds.all}</div>
                <div>Pressure: {props.currentData.main.pressure}</div>
                <div>Humidity: {props.currentData.main.humidity}%</div>
                <div>Max Temp: {props.currentData.main.temp_max}</div>
                <div>Min Temp: {props.currentData.main.temp_min}</div>
                <div>Main: {props.currentData.weather[0].main}</div>
                <div>Description: {props.currentData.weather[0].description}</div>
                <div>Wind Speed: {props.currentData.wind.speed}</div>
                <div>Wind Degrees: {props.currentData.wind.deg}</div>
                {/* changing sunrise and sunset to local time */}
                <div>Sunrise: {new Date(props.currentData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</div>
                <div>Sunset: {new Date(props.currentData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</div>
                <div>Time: {new Date(props.currentData.dt * 1000).toLocaleTimeString('en-IN')}</div>
           </div>




            {/* 
                <div>{props.blue}</div>
                <div>{props.yellow}</div>
            */}

        </div>    
    )
        }
}

export default Current