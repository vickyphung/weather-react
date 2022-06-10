

const Daily = (props) => {
   
    {console.log("Made it to the Daily Component")}
    if (props.dailyData) {
    return (
        
        <div className="dailyContainer">
            {console.log (props)}
            {console.log('Prop Data Successfully Passed')}

            <div className="dailyContent">
            {
                props.dailyData?.map ( (day, index) => {
                    return (
                    <div key={index}>
                        <div className='dailyItem'>
                        DAY{index}
                        <p>{day.dt}</p>
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

export default Daily