import { combineReducers } from 'redux';
import { getStateResultsReducer } from '../reducers/getStateResultsReducer'
import { getNameResultsReducer } from '../reducers/getNameResultsReducer'
import { getDenverBreweriesReducer } from '../reducers/getDenverBreweriesReducer'
import { getNationalBreweriesReducer } from '../reducers/getNationalBreweriesReducer'


const rootReducer = combineReducers ({
  stateResults: getStateResultsReducer,
  nameResults: getNameResultsReducer,
  denverResults: getDenverBreweriesReducer,
  nationalResults: getNationalBreweriesReducer
});

export default rootReducer