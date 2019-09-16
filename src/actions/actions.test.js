import { 
  getStateResults, 
  getNameResults, 
} from '../actions';

describe('actions', () => {

  it('should return the correct action object for the action type - getStateResults', () => {
    const mockResult = {id: 1516, name: 'Ratio Beerworks', street: '2920 Larimer St', city: 'Denver', state:'Colorado', phone:'3012669264'}
    const result = getStateResults(mockResult);
    const expected = {
      type: 'GET_STATE_RESULTS',
      state: mockResult
    }
    expect(result).toEqual(expected);
  });

});