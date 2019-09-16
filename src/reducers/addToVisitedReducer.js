export const addToVisitedReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_VISITED':
      return [...state, action.visited]
      default:
        return state
  }
}