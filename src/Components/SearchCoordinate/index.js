import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import Weather from "../Weather";
import Current from '../Current'
import Daily from '../Daily'
import Hour from '../Hour'
import "./styles.css";

//function that takes user's zipcode and translates it to latitude and longitude
function SearchCoordinate(props) {
  const [zipData, setZipData] = useState({
    // sets default coordinate search
    lat: 38.8191,
    lon: -77.1484,
  });

  const [lat, setLat] = useState({
    lat: 38.8191,
  });

  const [lon, setLon] = useState({
    lon: -77.1484,
  });

  const [weatherData, setWeatherData] = useState({});

  //an effect that runs based on the zipcodeInput prop
  useEffect(() => {
    const fetchData = async () => {
      if (props.zipcodeInput) {
        console.log(
          "Zipcode Input Successfully Passed and Coordinates data fetched"
        );
        const response = await axios.get(
          `https://api.openweathermap.org/geo/1.0/zip?zip=${props.zipcodeInput},us&appid=${process.env.REACT_APP_WEATHER_KEY}`
        );
        setZipData(response.data);
        //sets lat and lon data, sends to Weather to fetch weather data based on lat/lon coordinates
        setLat(zipData.lat);
        setLon(zipData.lon);
        console.log(lat);
        console.log(lon);
      }

      // moved this function to it's own component, Weather
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${zipData.lat}&lon=${zipData.lon}&units=imperial&exclude=minutely&appid=788366a04033c9058cc21a81db1e1ee8`
      );
      const weatherResponse = response.data;
      setWeatherData({
        current: weatherResponse.current,
        hourly: weatherResponse.hourly,
        daily: weatherResponse.daily,
      });
      console.log(weatherResponse);
      console.log("^^^^^^^HELLO the weather data is HERE in SEARCH COORD");
    };
    fetchData();
  }, [props.zipcodeInput, props, zipData.lat, zipData.lon, lat, lon]);

  return (
    <div className="zipData">
      {console.log(zipData)}
      <div className="locationInfo">
        <p> {zipData.country}</p>
        <p>{zipData.name}</p>
        <p>{zipData.zip}</p>
      </div>



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
    </div>
  );
}

export default SearchCoordinate;
