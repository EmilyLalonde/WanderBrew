import { getDenverBreweriesReducer } from './getDenverBreweriesReducer'

describe('getDenverBreweriesReducer', () => {
  let mockState, mockDenverResult;

  beforeEach(() => {
    mockState = [];
    mockDenverResult = [{id: 1516, name: 'Ratio Beerworks', street: '2920 Larimer St', city: 'Denver', state:'Colorado', phone:'3012669264'}]
  })

  it('should return the initial state', () => {
    const expected = mockState;
    const result = getDenverBreweriesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the name search results array when GET_NAME_RESULTS action is passed', () => {
    const expected = mockDenverResult
    const nameAction = {
      type: 'GET_DENVER_BREWERIES',
      brewery: mockDenverResult
    }
    const result = getDenverBreweriesReducer(undefined, nameAction);

    expect(result).toEqual(expected);
  });
});