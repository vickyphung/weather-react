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
  


        let results = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=1487901be6f44fbbbf4de0d837611d87&include=useragent`)
            setIPInfo(results.data)
            console.log(results.data);

            
      }
      fetchData();
    }, [lat,long])

    return (
        <div className="geolocate">
            <div><span>{ipInfo.country_name}</span></div>
            <div><span>{ipInfo.state_prov}</span></div>
            <div><span>{ipInfo.city}</span></div>
            <div><span>{ipInfo.zipcode}</span></div>
            <div><span>{ipInfo.latitude}° lat</span></div>
            <div><span>{ipInfo.longitude}° lon</span></div>
            <div><span>{ipInfo.isp}</span></div>
            <div><span>{ipInfo.ip}</span></div>

        </div>
)
}