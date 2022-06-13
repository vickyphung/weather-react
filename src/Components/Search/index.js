
import {useState} from 'react'
import SearchCoordinateInput from '../SearchCoordinateInput';
import SearchCoordinate from '../SearchCoordinate';
import Weather from '../Weather'

//connects search coordinate form and search coordinate function
function Search () {
    
    const [zipcodeInput, setZipcodeInput] = useState('22312')
    const setZipcodeInputAndLink = (zipcode) => {
        setZipcodeInput(zipcode)
    }    

    const [lat, setLat] = useState([]);
    const setLatAndLink = (lat) => {
        setLat(lat)
    }
    
    const [lon, setLon] = useState([]);
    const setLonAndLink = (lon) => {
        setLon(lon)
    }

    return (
        <div>
            
            <div className='search'>
                <div>
                  <SearchCoordinate zipcodeInput={zipcodeInput} setLatitude={setLatAndLink} setLongitude={setLonAndLink}/>
                </div>
                <div>
                    <SearchCoordinateInput setZipcode={setZipcodeInputAndLink}/>
                </div>
            </div>


            <div><Weather lat={lat} lon={lon}/></div>


        </div>
    )
}

export default Search;