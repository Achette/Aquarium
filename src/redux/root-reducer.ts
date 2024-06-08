import { combineReducers } from 'redux'
import aquariumDetails from './reducers/aquariumDetails'
import petsDetails from './reducers/petsDetails'
import accessoriesDetails from './reducers/accessoriesDetails'
import sensorsDetails from './reducers/sensorsDetails'
import graphSlice from './reducers/graphSlice'

export const rootReducer = combineReducers({
  aquariumDetails,
  petsDetails,
  accessoriesDetails,
  sensorsDetails,
  graphSlice
})
