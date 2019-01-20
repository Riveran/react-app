import { normalizedComments as defaultComments } from '../components/fixtures'

export default (commentsState = defaultComments, action) => {
  const { type } = action
  switch (type) {
    default:
      return commentsState
  }
}
