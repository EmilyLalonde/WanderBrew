export const getBreweriesByState = async (state) => {
  const alabamaBreweries = `https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=50`
  const response = await fetch(alabamaBreweries)
  if(!response.ok) {
    throw new Error('There was an error getting your albums')
  }
  const alBreweries = await response.json();
  return alBreweries
}

// export const getAlaskaBreweries = async () => {
//   const alaskaBreweries = 'https://api.openbrewerydb.org/breweries?by_state=alaska&per_page=50'
//   const response = await fetch(alaskaBreweries)
//   if(!response.ok) {
//     throw new Error('There was an error getting your albums')
//   }
//   const akBreweries = await response.json();
//   return akBreweries
// }


