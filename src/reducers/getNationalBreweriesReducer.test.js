import { getNationalBreweriesReducer } from './getNationalBreweriesReducer'

describe('getNationalBreweriesReducer', () => {
  let mockState, mockNationalResult;

  beforeEach(() => {
    mockState = [];
    mockNationalResult = [{id: 1516, name: 'Ratio Beerworks', street: '2920 Larimer St', city: 'Denver', state:'Colorado', phone:'3012669264'}]
  })

  it('should return the initial state', () => {
    const expected = mockState;
    const result = getNationalBreweriesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the name search results array when GET_NAME_RESULTS action is passed', () => {
    const expected = mockNationalResult
    const nameAction = {
      type: 'GET_NATIONAL_BREWERIES',
      brewery: mockNationalResult
    }
    const result = getNationalBreweriesReducer(undefined, nameAction);

    expect(result).toEqual(expected);
  });
});