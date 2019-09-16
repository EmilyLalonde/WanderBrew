import { getBreweriesByState, getBreweriesByName, getPopularDenverBreweries, getPopularBreweriesNational } from "./apiCalls";

describe('getBreweriesByState', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {id: 1516, 
        name: 'Ratio Beerworks', 
        street: '2920 Larimer St', 
        city: 'Denver', 
        state:'Colorado', 
        phone:'3012669264'
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should return an array', () => {
    expect(getBreweriesByState()).resolves.toEqual(mockResponse)
    });
  });

  it('should return an error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getBreweriesByState()).rejects.toEqual(Error('There was an error getting your breweries'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down.'
      })
    })
    expect(getBreweriesByState()).rejects.toEqual(Error('Server is down.'))
})

describe('getBreweriesByName', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {id: 1516, 
        name: 'Ratio Beerworks', 
        street: '2920 Larimer St', 
        city: 'Denver', 
        state:'Colorado', 
        phone:'3012669264'
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should return an array ', () => {
    expect(getBreweriesByName()).resolves.toEqual(mockResponse)
    });
  });

  it('should return an error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getBreweriesByName()).rejects.toEqual(Error('There was an error getting your breweries'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down.'
      })
    })
    expect(getBreweriesByName()).rejects.toEqual(Error('Server is down.'))
})

describe('getPopularDenverBreweries', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {id: 1516, 
        name: 'Ratio Beerworks', 
        street: '2920 Larimer St', 
        city: 'Denver', 
        state:'Colorado', 
        phone:'3012669264'
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should return an array ', () => {
    expect(getPopularDenverBreweries()).resolves.toEqual(mockResponse)
    });
  });

  it('should return an error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getPopularDenverBreweries()).rejects.toEqual(Error('There was an error getting your breweries'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down.'
      })
    })
    expect(getPopularDenverBreweries()).rejects.toEqual(Error('Server is down.'))
})

describe('getPopularBreweriesNational', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {id: 1516, 
        name: 'Ratio Beerworks', 
        street: '2920 Larimer St', 
        city: 'Denver', 
        state:'Colorado', 
        phone:'3012669264'
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should return an array ', () => {
    expect(getPopularBreweriesNational()).resolves.toEqual(mockResponse)
    });
  });

  it('should return an error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getPopularBreweriesNational()).rejects.toEqual(Error('There was an error getting your breweries'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Server is down.'
      })
    })
    expect(getPopularBreweriesNational()).rejects.toEqual(Error('Server is down.'))
})