import { 
  getStateResults, 
  getNameResults,
  addToVisited 
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

  it('should return the correct action object for the action type - getNameResults', () => {
    const mockResult = {id: 1516, name: 'Ratio Beerworks', street: '2920 Larimer St', city: 'Denver', state:'Colorado', phone:'3012669264'}
    const result = getNameResults(mockResult);
    const expected = {
      type: 'GET_NAME_RESULTS',
      name: mockResult
    }
    expect(result).toEqual(expected);
  });

  it('should return the correct action object for the action type - addToVisited', () => {
    const mockResult = {id: 1516, name: 'Ratio Beerworks', street: '2920 Larimer St', city: 'Denver', state:'Colorado', phone:'3012669264'}
    const result = addToVisited(mockResult);
    const expected = {
      type: 'ADD_VISITED',
      visited: mockResult
    }
    expect(result).toEqual(expected);
  });

});