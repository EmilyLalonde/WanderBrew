import { combineReducers } from 'redux';
import { getStateResultsReducer } from '../reducers/getStateResultsReducer'
import { getNameResultsReducer } from '../reducers/getNameResultsReducer'
import { addToVisitedReducer } from '../reducers/addToVisitedReducer'

const rootReducer = combineReducers ({
  stateResults: getStateResultsReducer,
  nameResults: getNameResultsReducer,
  visited: addToVisitedReducer
});

export default rootReducer