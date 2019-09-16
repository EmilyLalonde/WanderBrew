import { getNameResultsReducer } from './getNameResultsReducer'

describe('getNameResultsReducer', () => {
  let mockState, mockNameResult;

  beforeEach(() => {
    mockState = [];
    mockNameResult = [{id: 1516, name: 'Ratio Beerworks', street: '2920 Larimer St', city: 'Denver', state:'Colorado', phone:'3012669264'}]
  })

  it('should return the initial state', () => {
    const expected = mockState;
    const result = getNameResultsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the name search results array when GET_NAME_RESULTS action is passed', () => {
    const expected = mockNameResult
    const nameAction = {
      type: 'GET_NAME_RESULTS',
      name: mockNameResult
    }
    const result = getNameResultsReducer(undefined, nameAction);

    expect(result).toEqual(expected);
  });
});