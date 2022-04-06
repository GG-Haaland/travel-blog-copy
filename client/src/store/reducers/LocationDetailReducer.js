const { GET_LOCATION_DETAILS } = require('../types')

const iState = {
 locationDetails: []
}

const LocationDetailReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_LOCATION_DETAILS:
      return { ...state, locationDetails: action.payload }
    default:
      return { ...state }
  }
}

export default LocationDetailReducer