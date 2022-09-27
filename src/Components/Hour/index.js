// import { useState } from "react";

// const Hour = (props) => {
//     console.log("Made it to the Hour Component")
//     const [isShown, setIsShown] = useState(true);

//     const handleClick = event => {
//       // // 👇️ toggle shown state
//       setIsShown(current => !current);

//       // 👇️ or simply set it to true
//       // setIsShown(true);
//     };

//     return (
//       <div className="showBtn">
//         <button className="weekBtn" onClick={handleClick}><span className="weekly">Hourly</span></button>

//         {/* 👇️ show elements on click */}
//         {isShown && (
//           <div>
//           </div>
//         )}

//         {/* 👇️ show component on click */}
//         {isShown && <Box />}
//       </div>
//     );

//   function Box() {
//     if (props.hourData) {
//         return (
//             <div className="hourContainer">
//                 {console.log (props)}
//                 <div className="hourContent">
//                     {
//                     props.hourData?.map ( (hour, i) => {
//                         return (
//                             <div key={i}>
//                                 <div className='hourItem'>
//                                     <p className="hour">{(new Date(hour.dt * 1000)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
//                                     <img className="iconImg" src={require('../../images/v2/' + hour.weather[0].icon + '.png')} alt = {hour.weather[0].description}/>
//                                     <p className="hourTemp">{hour.temp}</p>
//                                 </div>
//                             </div>
//                         )
//                     })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }
// }

// export default Hour

import React from "react";
import "./styles.css";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Hour = (props) => {
  console.log("Made it to the Hour Component");

  if (props.hourData) {
    return (
      <div>
        {console.log(props)}
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton
                className="weeklyDrop"
                _expanded={{ bg: "#5b6efd", color: "white" }}
              >
                <Box flex="1" textAlign="left">
                  <span className="weekly">Hourly</span>
                </Box>

                <span className="accordIcon">
                  {" "}
                  <AccordionIcon />
                </span>
              </AccordionButton>
            </h2>

            <AccordionPanel className="reviewsBox" pb={4}>
              <div className="hourContent">
                {props.hourData?.map((hour, i) => {
                  return (
                    <div key={i}>
                      <div className="hourItem">
                        <p className="hour">
                          {new Date(hour.dt * 1000).toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </p>
                        <img
                          className="iconImg"
                          src={require("../../images/v2/" +
                            hour.weather[0].icon +
                            ".png")}
                          alt={hour.weather[0].description}
                        />
                        <p className="hourTemp">{hour.temp}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
};
export default Hour;
