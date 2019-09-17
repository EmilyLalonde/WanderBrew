import React from 'react';
import { shallow } from 'enzyme'
import { HomeContainer, mapStateToProps } from './HomeContainer';
import { getBreweriesByState, getBreweriesByName } from "../../apiCalls/apiCalls";

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

describe('HomeContainer', () => {
  let wrapper;

  let mockDenverResults = [
    {
      id: 1516, 
      name: 'Ratio Beerworks', 
      street: '2920 Larimer St', 
      city: 'Denver', 
      state:'Colorado', 
      phone:'3012669264'
    }
  ]

  let mockNationalResults = [
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
    denverResults: [mockDenverResults],
    nationalResults: [mockNationalResults]
  }

  beforeEach(() => {
    wrapper = shallow (<HomeContainer props={mockDenverResults || mockNationalResults}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

it('should call mapStateToProps with the props it needs', () => {
  let mockDenverResults = [
    {
      id: 1516, 
      name: 'Ratio Beerworks', 
      street: '2920 Larimer St', 
      city: 'Denver', 
      state:'Colorado', 
      phone:'3012669264'
    }
  ]

  let mockNationalResults = [
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
    denverResults: [mockDenverResults],
    nationalResults: [mockNationalResults]
  }

  const expected = {
    denverResults: [mockDenverResults],
    nationalResults: [mockNationalResults],
  }
  const mappedProps = mapStateToProps(mockState)
  
  expect(mappedProps).toEqual(expected);
})