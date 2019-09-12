export const getBreweriesByState = async (state) => {
  const stateBreweries = `https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=50`
  const response = await fetch(stateBreweries)
  if(!response.ok) {
    throw new Error('There was an error getting your albums')
  }
  const allStateBreweries = await response.json();
  return allStateBreweries
}

export const getBreweriesByName = async (name) => {
  const nameBreweries = `https://api.openbrewerydb.org/breweries?by_name=${name}&per_page=50`
  const response = await fetch(nameBreweries)
  if(!response.ok) {
    throw new Error('There was an error getting your albums')
  }
  const namedBrewery = await response.json();
  console.log(namedBrewery)
  return namedBrewery
}


