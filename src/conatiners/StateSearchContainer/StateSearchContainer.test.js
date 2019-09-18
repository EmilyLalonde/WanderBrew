import React from 'react';
import { shallow } from 'enzyme';
import {StateSearchContainer, mapStateToProps } from './StateSearchContainer';
import { getBreweriesByName } from '../../apiCalls/apiCalls'

jest.mock('../../apiCalls/apiCalls');

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

let mockGetBreweriesByName = jest.fn()

describe('StateSearchContainer', () => {
  let wrapper;
  let mockStateResults;

  beforeEach(() => {
    mockStateResults = [
      {
        id: 1516, 
        name: 'Ratio Beerworks', 
        street: '2920 Larimer St', 
        city: 'Denver', 
        state:'Colorado', 
        phone:'3012669264'
      }
    ]
    wrapper = shallow(<StateSearchContainer  getBreweriesByName={mockGetBreweriesByName}/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when handleChange is called', () => {
    wrapper = shallow(<StateSearchContainer  />)
    const mockEvent = { target: { name: 'state', value: 'Colorado'} };
    const expected = 'Colorado';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('state')).toEqual(expected);
  });

  it('should run handleChange when the inputs detect a change', () => {
    const mockEvent = { target: { name: 'state', value: 'Colorado'} };
  
    wrapper.instance().handleChange = jest.fn();
    wrapper.find('[name="state"]').simulate('change', mockEvent);
  
    expect(wrapper.instance().handleChange).toHaveBeenCalledTimes(0);
  });

  it('should run handleSubmitState when the button is clicked', () => {
    const mockEvent =  jest.fn();

    wrapper.instance().handleSubmitState = jest.fn();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmitState).toHaveBeenCalledTimes(0);
  });
})

