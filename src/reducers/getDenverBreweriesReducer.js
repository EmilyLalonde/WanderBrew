export const getDenverBreweriesReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_DENVER_BREWERIES':
      return [...action.brewery];
      default:
        return state;
  }
}