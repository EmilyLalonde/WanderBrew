export const getBreweriesByState = async (state) => {
  let [stateBreweries50, stateBreweries100, stateBreweries150, stateBreweries200, stateBreweries250, stateBreweries300] = 
  await Promise.all([1,2,3,4,5,6].map(num => {
    return fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}&page=${num}&per_page=50`)
  }))
  if(!stateBreweries50.ok) {
    throw new Error('There was an error getting your breweries')
  }
   const allStateBreweries1 = await stateBreweries50.json();
   const allStateBreweries2 = await stateBreweries100.json();
   const allStateBreweries3 = await stateBreweries150.json();
   const allStateBreweries4 = await stateBreweries200.json();
   const allStateBreweries5 = await stateBreweries250.json();
   const allStateBreweries6 = await stateBreweries300.json();
   const all = [allStateBreweries1, allStateBreweries2, allStateBreweries3, allStateBreweries4, allStateBreweries5, allStateBreweries6]
   return all.flat()
}

export const getBreweriesByName = async (name) => {
  const nameBreweries = `https://api.openbrewerydb.org/breweries?by_name=${name}&per_page=50`
  const response = await fetch(nameBreweries)
  if(!response.ok) {
    throw new Error('There was an error getting your breweries')
  }
  const namedBrewery = await response.json();
  console.log(namedBrewery)
  return namedBrewery
}

export const getPopularDenverBreweries = async () => {

     let [littleMachine, westfax, ratio, seedstock] =
     await Promise.all(['little_machine', 'westfax', 'ratio_beerworks', 'seedstock'].map(name => {
      return fetch(`https://api.openbrewerydb.org/breweries?by_name=${name}`)
     }))
     if(!littleMachine.ok) {
      throw new Error('There was an error getting your breweries')
    }
    const littleMachineRes = await littleMachine.json();
    const westfaxRes = await westfax.json();
    const ratioRes = await ratio.json();
    const seedstockRes = await seedstock.json()
    const allDenver = [littleMachineRes, westfaxRes, ratioRes, seedstockRes]
    return allDenver.flat()
}

export const getPopularBreweriesNational = async () => {

  let [dogfishHead, allagash, ninkasi, summitBrewing] =
  await Promise.all(['dogfish_head_craft_brewery', 'allagash', 'ninkasi', 'summit_brewing'].map(name => {
   return fetch(`https://api.openbrewerydb.org/breweries?by_name=${name}`)
  }))
  if(!dogfishHead.ok) {
   throw new Error('There was an error getting your breweries')
 }
 const dogfishHeadRes = await dogfishHead.json();
 const allagashRes = await allagash.json();
 const ninkasiRes = await ninkasi.json();
 const summitBrewingRes = await summitBrewing.json()
 const allDenver = [dogfishHeadRes, allagashRes, ninkasiRes, summitBrewingRes]
 return allDenver.flat()
}