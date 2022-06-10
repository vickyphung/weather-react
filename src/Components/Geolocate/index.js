import { useState, useEffect } from "react";
import axios from "axios";
//function that gets latitude and longitude from user's current location

export default function Geolocate () {
    
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [ipInfo, setIPInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
  
        let response = await axios.get(`https://api.ipgeolocation.io/timezone?apiKey=1487901be6f44fbbbf4de0d837611d87&lat=${lat}&long=${long}`)
            setData(response.data)
            console.log(response.data);

        let results = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=1487901be6f44fbbbf4de0d837611d87&include=useragent`)
            setIPInfo(results.data)
            console.log(results.data);

            
      }
      fetchData();
    }, [lat,long])

    return (
        <div>
        
            <div>Date {data.date}</div>
            <div>Time {data.time_12}</div>
            <div>Timezone {data.timezone}</div>
            
            <div>Latitutde {lat}</div>
            <div>Longitude {long}</div>
            <div><span>{ipInfo.country_name}</span></div>
            <div><span>{ipInfo.state_prov}</span></div>
            <div><span>{ipInfo.city}</span></div>
            <div><span>{ipInfo.zipcode}</span></div>
            <div><span>{ipInfo.ip}</span></div>
            <div><span>{ipInfo.isp}</span></div>











    </div>
)
}