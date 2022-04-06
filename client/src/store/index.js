import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import LocationReducer from './reducers/LocationReducer'
import LocationDetailReducer from './reducers/LocationDetailReducer'
// import ProductReducer from './reducers/ProductReducer'

const store = createStore(
  combineReducers({
    locationState: LocationReducer,
    locationDetailState: LocationDetailReducer,
   
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store