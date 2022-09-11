import { useState } from "react";

const Daily = (props) => {
   
    {console.log("Made it to the Daily Component")}

    const [isShown, setIsShown] = useState(true);

    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
  
      // 👇️ or simply set it to true
      // setIsShown(true);
    };
  
    return (
      <div className="showBtn">
        <button className="weekBtn" onClick={handleClick}>Weekly</button>
  
        {/* 👇️ show elements on click */}
        {isShown && (
          <div>
          </div>
        )}
  
        {/* 👇️ show component on click */}
        {isShown && <Box />}
      </div>
    );
  



    function Box() {



    if (props.dailyData) {
    return (
        
        <div className="dailyContainer">
            {console.log (props)}
            <div className="dailyContent">
            {
                props.dailyData?.map ( (day, index) => {
                    return (
                    <div key={index}>
                        <div className='dailyItem'>
                        <p>{new Date(day.dt * 1000).toLocaleString('en-US', { weekday: 'short' })}</p>
                        <img className="iconImg" src={require('../../images/v2/' + day.weather[0].icon + '.png')} alt = {day.weather[0].description}/>
                        <p>{day.temp.day}</p>

                        </div>
                    </div>
                    )
                })
            }    

            </div>    
        </div>
    )
    }
}
}

export default Daily