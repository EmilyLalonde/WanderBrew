import React from 'react'
import { shallow } from 'enzyme'
import {StateContainer} from './StateContainer'

describe('StateContainer', () => {
  let wrapper;
  let mockBreweries;

  beforeEach(() => {
    mockBreweries = [{id: 1516, name: 'Ratio Beerworks', street: '2920 Larimer St', city: 'Denver', state:'Colorado', phone:'3012669264'}]
    wrapper= shallow(<StateContainer nameResults={mockBreweries}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})