import { combineReducers } from 'redux';
import { getStateResultsReducer } from '../reducers/getStateResultsReducer'
import { getNameResultsReducer } from '../reducers/getNameResultsReducer'

const rootReducer = combineReducers ({
  stateResults: getStateResultsReducer,
  nameResults: getNameResultsReducer
});

export default rootReducer