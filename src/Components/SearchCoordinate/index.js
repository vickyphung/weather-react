import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios'

//function that takes user's zipcode and translates it to latitude and longitude
 function SearchCoordinate(props) {

  const [zipData, setZipData] = useState({
  //sets default coordinate search 
    lat: 38.8191,
    lon: -77.1484
 });

//an effect that runs based on the zipcodeInput prop
  useEffect(()=>{
      const fetchData = async () => {
          if (props.zipcodeInput) {
              console.log ("Zipcode Input Successfully Passed")
              const response = await axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${props.zipcodeInput},us&appid=${process.env.REACT_APP_WEATHER_KEY}`)
              setZipData(response.data)
              console.log("Coordinates data fetched")
              //sets lat and lon data, sends to Weather to fetch weather data based on lat/lon coordinates
              props.setLatitude(zipData.lat)
              props.setLongitude(zipData.lon)
          } 
          console.log(zipData.lat)

          //moved this function to it's own component, Weather
          // let results = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${zipData.lat}&lon=${zipData.lon}&units=imperial&exclude=minutely&appid=788366a04033c9058cc21a81db1e1ee8`)
          //     setWeatherData(results.data)
      }
      fetchData();
    }, [props.zipcodeInput])

  console.log(zipData)

  return (
    <div id="ran" className="searchContainer">
      <div className="zipData">
          <p> {zipData.country}</p>
          <p>{zipData.name}</p>
          <p>{zipData.zip}</p>
          <p> {zipData.lat}</p>
          <p> {zipData.lon}</p>
      </div>
    </div>
  );
}


export default SearchCoordinate