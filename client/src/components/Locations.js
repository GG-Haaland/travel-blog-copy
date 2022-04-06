import { useEffect } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { LoadLocations } from '../store/actions/LocationActions'
// import { POSTER_PATH } from '../globals'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocation: () => dispatch(LoadLocations())
  }
}

const Locations = (props) => {

  useEffect(() => {
    props.fetchLocation()
  }, [])
  
  return (
    <div className="locations">
        <h1>Locations</h1>
      {props.locationState.locations.map((location) => (
        <div key={location._id}>

          <h3>{location.name}</h3>
          <img src={location.image} alt={location.name}/>
        
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)