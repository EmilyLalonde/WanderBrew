import React from 'react';
import { shallow } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getBreweriesByState, getBreweriesByName, getPopularDenverBreweries, getPopularBreweriesNational } from "../../apiCalls/apiCalls";

jest.mock('../../apiCalls/apiCalls');

getBreweriesByState.mockImplementation(() => {
  return Promise.resolve({
    id: 1516, 
    name: 'Ratio Beerworks', 
    street: '2920 Larimer St', 
    city: 'Denver', 
    state:'Colorado', 
    phone:'3012669264'
  })
});

getBreweriesByName.mockImplementation(() => {
  return Promise.resolve({
    id: 1516, 
    name: 'Ratio Beerworks', 
    street: '2920 Larimer St', 
    city: 'Denver', 
    state:'Colorado', 
    phone:'3012669264'
  })
});

getPopularDenverBreweries.mockImplementation(() => {
  return Promise.resolve({
    id: 1516, 
    name: 'Ratio Beerworks', 
    street: '2920 Larimer St', 
    city: 'Denver', 
    state:'Colorado', 
    phone:'3012669264'
  })
});

getPopularBreweriesNational.mockImplementation(() => {
  return Promise.resolve({
    id: 1516, 
    name: 'Ratio Beerworks', 
    street: '2920 Larimer St', 
    city: 'Denver', 
    state:'Colorado', 
    phone:'3012669264'
  })
});

describe('App', () => {
  let wrapper;

  let mockStateResults = [
    {
      id: 1516, 
      name: 'Ratio Beerworks', 
      street: '2920 Larimer St', 
      city: 'Denver', 
      state:'Colorado', 
      phone:'3012669264'
    }
  ]

  let mockNameResults = [
    {
      id: 1516, 
      name: 'Ratio Beerworks', 
      street: '2920 Larimer St', 
      city: 'Denver', 
      state:'Colorado', 
      phone:'3012669264'
    }
  ]

  let mockState = {
    stateResults: [mockStateResults],
    nameResults: [mockNameResults]
  }

  let mockAddNote = jest.fn()
  let mockGetPopularDenverBreweries = jest.fn()
  let mockGetPopularBreweriesNational = jest.fn()

  beforeEach(() => {
    wrapper= shallow(<App 
      getPopularDenverBreweries={mockGetPopularDenverBreweries}
      getPopularBreweriesNational={mockGetPopularBreweriesNational}
      addNote={mockAddNote}
    />)
  })

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

  it('should call mapStateToProps with the props it needs', () => {
    let mockStateResults = [
      {
        id: 1516, 
        name: 'Ratio Beerworks', 
        street: '2920 Larimer St', 
        city: 'Denver', 
        state:'Colorado', 
        phone:'3012669264'
      }
    ]
  
    let mockNameResults = [
      {
        id: 1516, 
        name: 'Ratio Beerworks', 
        street: '2920 Larimer St', 
        city: 'Denver', 
        state:'Colorado', 
        phone:'3012669264'
      }
    ]
  
    let mockState = {
      stateResults: [mockStateResults],
      nameResults: [mockNameResults]
    }

    const expected = {
      stateResults: [mockStateResults],
      nameResults: [mockNameResults],
    }
    const mappedProps = mapStateToProps(mockState)
    
    expect(mappedProps).toEqual(expected);
  })

  it('should call getPopularDenverBreweries and getPopularBreweriesNational when mounting', () => {
    expect(getPopularDenverBreweries).toHaveBeenCalled();
    expect(getPopularBreweriesNational).toHaveBeenCalled();
  });