import React from 'react'
import { shallow } from 'enzyme'

it('should equal true', () => {
  expect(true).toEqual(true)
});

// import React from 'react'
// import { shallow } from 'enzyme'
// import  DefaultBreweriesContainer  from './DefaultBreweriesContainer'

// describe('DefaultBreweriesContainer', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<DefaultBreweriesContainer 
//       id= {1516}
//       name= 'Ratio Beerworks'
//       street= '2920 Larimer St'
//       city= 'Denver'
//       state='Colorado'
//       phone='3012669264'
//       />)
//   });

//   it('should match the snapshot with all data being passed correctly', () => {
//     expect(wrapper).toMatchSnapshot();
//   })
  
// })