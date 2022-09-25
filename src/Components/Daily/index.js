// import { useState } from "react";

// const Daily = (props) => {
//   {
//     console.log("Made it to the Daily Component");
//   }

//   const [isShown, setIsShown] = useState(true);

//   const handleClick = (event) => {
//     // 👇️ toggle shown state
//     setIsShown((current) => !current);

//     // 👇️ or simply set it to true
//     // setIsShown(true);
//   };

//   return (
//     <div className="showBtn">
//       <button className="weekBtn" onClick={handleClick}>
//         <span className="weekly">Weekly</span>
//       </button>

//       {/* 👇️ show elements on click */}
//       {isShown && <div></div>}

//       {/* 👇️ show component on click */}
//       {isShown && <Box />}
//     </div>
//   );

//   function Box() {
//     if (props.dailyData) {
//       return (
//         <div className="dailyContainer">
//           {console.log(props)}
//           <div className="dailyContent">
//             {props.dailyData?.map((day, index) => {
//               return (
//                 <div key={index}>
//                   <div className="dailyItem">
//                     <p>
//                       {new Date(day.dt * 1000).toLocaleString("en-US", {
//                         weekday: "short",
//                       })}
//                     </p>
//                     <img
//                       className="dailyIconImg"
//                       src={require("../../images/v2/" +
//                         day.weather[0].icon +
//                         ".png")}
//                       alt={day.weather[0].description}
//                     />
//                     <p>{day.temp.day}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       );
//     }
//   }
// };

// export default Daily;

import React from "react";
import './styles.css'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";


// const Daily = (props) => {
//   console.log("Made it to the Current Component");

//   if (props.dailyData) {
//     return (

//       <div>
//          <span className="weekly">Weekly</span>

//       <div className="dailyContainer">
//         {console.log(props)}

//         <div className="dailyContent">
//           {props.dailyData?.map((day, index) => {
//             return (
//               <div key={index}>
//                 <div className="dailyItem">
//                   <p>
//                     {new Date(day.dt * 1000).toLocaleString("en-US", {
//                       weekday: "short",
//                     })}
//                   </p>
//                   <img
//                     className="dailyIconImg"
//                     src={require("../../images/v2/" +
//                       day.weather[0].icon +
//                       ".png")}
//                     alt={day.weather[0].description}
//                   />
//                   <p>{day.temp.day}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       </div>
//     );
//   }
// };
// export default Daily;

const Daily = (props) => {
  console.log("Made it to the Current Component");

  if (props.dailyData) {
    return (
      <div>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton
                className="weeklyDrop"
                _expanded={{ bg: "#5b6efd", color: "white" }}
              >
                <Box flex="1" textAlign="left">
                  <span className="weekly">Weekly</span>
                </Box>

                <span className="accordIcon">
                  {" "}
                  <AccordionIcon />
                </span>
              </AccordionButton>
            </h2>

            <AccordionPanel className="reviewsBox" pb={4}>


              <div className="dailyContent">
                {props.dailyData?.map((day, index) => {
                  return (
                    <div key={index}>
                      <div className="dailyItem">
                        <p className="weeklyDate">
                          {new Date(day.dt * 1000).toLocaleString("en-US", {
                            weekday: "long",
                          })}
                        </p>
                        <img
                          className="dailyIconImg"
                          src={require("../../images/v2/" +
                            day.weather[0].icon +
                            ".png")}
                          alt={day.weather[0].description}
                        />
                        <p className="weeklyTemp">{day.temp.day}</p>
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
export default Daily;
