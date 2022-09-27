import "./style.css";
// import Geolocate from '../Components/Geolocate';
import Search from "../Components/Search";
import DateTime from "../Components/DateTime";

function Home(props) {
  return (
    <div className="homeContent">
      <div className="dateSearch">
        <DateTime />
        <Search />
      </div>
    </div>
  );
}

export default Home;
