import { combineReducers } from 'redux'
import aquariumDetails from './reducers/aquariumDetails'
import petsDetails from './reducers/petsDetails'
import accessoriesDetails from './reducers/accessoriesDetails'

export const rootReducer = combineReducers({
  aquariumDetails,
  petsDetails,
  accessoriesDetails,
})
