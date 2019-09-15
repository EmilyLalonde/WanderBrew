export const getStateResultsReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_STATE_RESULTS':
      return [...action.state];
      default:
        return state;
  }
}

