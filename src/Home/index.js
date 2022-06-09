import './style.css';
import Nav from '../Components/Nav';
import HomeThree from '../Components/HomeThree';
import Zipcode from '../Components/Zipcode';
import Current from '../Components/Current';
import Coordinates from '../Components/Coordinates';


function Home(props) {
  
  //test prop for test prop passing
  const blue = "Prop from home to current as Blue"


  return (
    <div className="homeContainer">
        <div className="homeContent">     

            <div><Nav /></div>
                <Zipcode />
                <Coordinates />
                <Current />
        </div>
        </div>
      );
    }

export default Home;