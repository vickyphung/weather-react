import { useState } from 'react'


//form to input zipcode
function SearchCoordinateInput (props) {

  const [formData, setFormData] = useState('22312')

  const handleChange = (event) => {
    setFormData(event.target.value)
  }

  //zipcode data is sent to SearchCoordinate where the actual search is executed
  const handleSubmit = (event) => {
    event.preventDefault()
    props.setZipcode(formData)
  }
  
  return (
    <div className="searchCoordInput">
        <div className="searchCoordInputContent">      
          <form onSubmit={handleSubmit}>
            <input className="searchCoordForm" name="zip" id="zip" placeholder="Zipcode" onChange={handleChange} /> <br></br>
            <input className="submitBtn" type="submit" />
          </form>
          </div>
        </div>
      );
    }

export default SearchCoordinateInput;



