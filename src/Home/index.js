import "./style.css";
// import Geolocate from '../Components/Geolocate';
import Search from "../Components/Search";
import DateTime from "../Components/DateTime";

function Home(props) {
  return (
    <div className="homeContent">
      <h1>
        <span className="title">Weather</span>
      </h1>
      <div className="dateSearch">
        <DateTime />
        <Search />
      </div>
    </div>
  );
}

export default Home;
