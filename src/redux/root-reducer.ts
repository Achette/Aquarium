import { combineReducers } from 'redux'
import aquariumDetails from './reducers/aquariumDetails'
import petsDetails from './reducers/petsDetails'

export const rootReducer = combineReducers({ aquariumDetails, petsDetails })
