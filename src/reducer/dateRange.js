import { GET_DATE_RANGE } from '../constants'
const initialState = {
  dateRange: {
    from: null,
    to: null
  }
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_DATE_RANGE:
      return { ...state, dateRange: payload.dateRange }
    default:
      return state
  }
}
