export const getBreweriesByState = async (state) => {
  const stateBreweries = `https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=50`
  const response = await fetch(stateBreweries)
  if(!response.ok) {
    throw new Error('There was an error getting your albums')
  }
  const allStateBreweries = await response.json();
  return allStateBreweries
}

// export const getBreweriesByCity = async (city) => {
//   const cityBreweries = `https://api.openbrewerydb.org/breweries?by_name=${city}&per_page=50`
//   const response = await fetch(cityBreweries)
//   if(!response.ok) {
//     throw new Error('There was an error getting your albums')
//   }
//   const allCityBreweries = await response.json();
//   return allCityBreweries
// }


