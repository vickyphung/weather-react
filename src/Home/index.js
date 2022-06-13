import './style.css';
import Geolocate from '../Components/Geolocate';
import Search from '../Components/Search';

function Home(props) {  

  return (
    <div className="homeContainer">
        <div className="homeContent">   
            <h1 className='title'>Weather</h1>
            <Search />
        </div>
        </div>
      );
    }

export default Home;