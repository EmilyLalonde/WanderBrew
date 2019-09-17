export const getNationalBreweriesReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_NATIONAL_BREWERIES':
      return [...action.brewery];
      default:
        return state;
  }
}