import React from 'react'
import { shallow } from 'enzyme'
import {NameContainer} from './NameContainer'

describe('NameContainer', () => {
  let wrapper;
  let mockBreweries;

  beforeEach(() => {
    mockBreweries = [{id: 1516, name: 'Ratio Beerworks', street: '2920 Larimer St', city: 'Denver', state:'Colorado', phone:'3012669264'}]
    wrapper= shallow(<NameContainer nameResults={mockBreweries}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})