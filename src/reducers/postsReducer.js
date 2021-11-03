export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    default:
    // if we have nothing just return [] and never return undefined
    return state
  }
}
