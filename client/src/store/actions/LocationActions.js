import {
    GetLocations,
    GetLocationDetails
     } from '../../services/LocationService'
   import {GET_LOCATIONS, GET_LOCATION_DETAILS } from '../types'
   
   
   
   export const LoadLocations = () => {
     return async (dispatch) => {
       try {
         const locations = await GetLocations()
         dispatch({
           type:GET_LOCATIONS,
           payload: locations
         })
         console.log(locations)
       } catch (error){
         throw error
       }
     }
   }
 
   export const LoadLocationDetails = (id) => {
 
     return async (dispatch) => {
       try {
         const locationDetails = await GetLocationDetails(id)
   
         dispatch({
           type: GET_LOCATION_DETAILS,
           payload: locationDetails
         })
       } catch (error) {
         throw error
       }
     }
   }