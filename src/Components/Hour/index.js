
const Hour = (props) => {
    {console.log("Made it to the Hour Component")}
    if (props.hourData) {
        return (
            <div className="dailyContainer">
                {console.log (props)}
                {console.log('Prop Data Successfully Passed')}

                <div className="hourContent">
                    {
                    props.hourData?.map ( (hour, i) => {
                        return (
                            <div key={i}>
                                <div className='hourItem'>
                                    <p className="hour">{new Date(hour.dt * 1000).toLocaleTimeString('en-IN')}</p>
                                    <p className="hourTemp">{hour.temp}</p>
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

export default Hour