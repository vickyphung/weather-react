import './style.css';
import Geolocate from '../Components/Geolocate';
import Search from '../Components/Search';

function Home(props) {  

  return (
    <div className="homeContainer">
        <div className="homeContent">     
            <div><Geolocate /></div>
            <div><Search /></div>
        </div>
        </div>
      );
    }

export default Home;