export const getStateResults = state => ({
  type: 'GET_STATE_RESULTS',
  state
})

export const getNameResults = name => ({
  type: 'GET_NAME_RESULTS',
  name
})

export const getDenverBreweries = brewery => ({
  type: 'GET_DENVER_BREWERIES',
  brewery
})

export const getNationalBreweries = brewery => ({
  type: 'GET_NATIONAL_BREWERIES',
  brewery
})