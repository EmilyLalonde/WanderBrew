export const getNameResultsReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_NAME_RESULTS':
      return [...action.name];
      default:
        return state;
  }
}