import { getStateResultsReducer } from './getStateResultsReducer'

describe('getStateResultsReducer', () => {
  let mockState, mockStateResult;

  beforeEach(() => {
    mockState = [];
    mockStateResult = [{id: 1516, name: 'Ratio Beerworks', street: '2920 Larimer St', city: 'Denver', state:'Colorado', phone:'3012669264'}]
  })

  it('should return the initial state', () => {
    const expected = mockState;
    const result = getStateResultsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state with the state search results array when GET_STATE_RESULTS action is passed', () => {
    const expected = mockStateResult
    const stateAction = {
      type: 'GET_STATE_RESULTS',
      state: mockStateResult
    }
    const result = getStateResultsReducer(undefined, stateAction);

    expect(result).toEqual(expected);
  });
});