import React from 'react'
import { shallow } from 'enzyme'
import { Card } from './Card'

describe('Card', () => {
  let wrapper;
  let mockBreweries;

  beforeEach(() => {
    mockBreweries = [
      {
      id: 1516,
      name: 'Ratio Beerworks',
      street: '2920 Larimer St',
      city: 'Denver',
      state:'Colorado',
      phone:'3012669264',
      }
    ]
    wrapper = shallow(<Card breweries={mockBreweries}/>)
  });
  it('should match the snapshot with all data being passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})