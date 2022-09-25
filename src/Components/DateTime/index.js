import React, { useState, useEffect } from "react";
import "./styles.css";

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="dateTime">
      <div className="date">
        <p> {date.toDateString()}</p>
      </div>
      <div className="time">
        {" "}
        <p> {date.toLocaleTimeString()}</p>{" "}
      </div>
    </div>
  );
};

export default DateTime;
