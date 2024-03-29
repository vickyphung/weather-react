import React from "react";
import "./styles.css";
// import DateTime from '../DateTime'
const Current = (props) => {
  console.log("Made it to the Current Component");

  if (props.currentData) {
    return (
      <div className="currentContent">
        {console.log(props)}

        <div className="currentBox">
          <div className="currentMain">
            <img
              className="weatherIcon"
              alt="current weather"
              src={`https://openweathermap.org/img/wn/${props.currentData.weather[0].icon}@2x.png`}
            />

            <p className="currentTemp">
              <span className="heading">temp</span> {props.currentData.temp}°F
            </p>
            <p className="currentTemp">
              <span className="heading">feels like </span>
              {props.currentData.feels_like}°F
            </p>
            <p className="currentTemp">
              {props.currentData.weather[0].description}{" "}
            </p>
          </div>
        </div>

        <div className="currentOther">
          <div className="z">
            <div className="currentItem">
              <div>
                <img
                  alt="raindrop"
                  src="https://www.seekpng.com/png/full/80-803922_happy-raindrop-svg-scrapbook-cut-file-cute-clipart.png"
                ></img>
              </div>
              <div className="flexCol">
                <p className="heading">dew point</p>
                <div>{props.currentData.dew_point}</div>
              </div>
            </div>

            <div className="currentItem">
              <div>
                <img
                  alt="gauge"
                  src="https://www.svgrepo.com/show/244242/gauge.svg"
                ></img>
              </div>
              <div className="flexCol">
                <p className="heading">pressure</p>
                <div>{props.currentData.pressure}</div>
              </div>
            </div>

            <div className="currentItem">
              <div>
                <img
                  alt="humidity"
                  src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
                ></img>
              </div>
              <div className="flexCol">
                <p className="heading">humidity</p>
                <div>{props.currentData.humidity}</div>
              </div>
            </div>
          </div>

          <div className="z">
            <div className="currentItem">
              <div>
                <img
                  alt="wind"
                  src="https://www.svgrepo.com/show/42601/wind.svg"
                ></img>
              </div>
              <div className="flexCol">
                <p className="heading">wind</p>
                <div>{props.currentData.wind_deg}°</div>
              </div>
            </div>

            <div className="currentItem">
              <div>
                <img
                  alt="sunrise"
                  src="https://www.svgrepo.com/show/184358/sunrise-dawn.svg"
                ></img>
              </div>
              <div className="flexCol">
                <p className="heading">sunrise</p>
                <div>
                  {new Date(
                    props.currentData.sunrise * 1000
                  ).toLocaleTimeString("en-IN")}
                </div>
              </div>
            </div>
            <div className="currentItem">
              <div>
                <img
                  alt="sunset"
                  src="https://www.svgrepo.com/show/184361/sunset.svg"
                ></img>
              </div>
              <div className="flexCol">
                <p className="heading">sunset</p>
                <div>
                  {new Date(props.currentData.sunset * 1000).toLocaleTimeString(
                    "en-IN"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Current;
