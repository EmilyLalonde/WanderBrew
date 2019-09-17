import { 
  getStateResults, 
  getNameResults,
  getDenverBreweries,
  getNationalBreweries
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

  it('should return the correct action object for the action type - getDenverBreweries', () => {
    const mockResult = {id: 1516, name: 'Ratio Beerworks', street: '2920 Larimer St', city: 'Denver', state:'Colorado', phone:'3012669264'}
    const result = getDenverBreweries(mockResult);
    const expected = {
      type: 'GET_DENVER_BREWERIES',
      brewery: mockResult
    }
    expect(result).toEqual(expected);
  });

  it('should return the correct action object for the action type - getNationalBreweries', () => {
    const mockResult = {id: 1516, name: 'Ratio Beerworks', street: '2920 Larimer St', city: 'Denver', state:'Colorado', phone:'3012669264'}
    const result = getNationalBreweries(mockResult);
    const expected = {
      type: 'GET_NATIONAL_BREWERIES',
      brewery: mockResult
    }
    expect(result).toEqual(expected);
  });

});