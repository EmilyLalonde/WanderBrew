export const getStateResults = state => ({
  type: 'GET_STATE_RESULTS',
  state
})

export const getNameResults = name => ({
  type: 'GET_NAME_RESULTS',
  name
})

export const error = message => ({
  type: 'ERROR',
  message
})