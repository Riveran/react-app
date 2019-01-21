import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../selectors/index'

const commentSelector = createCommentSelector()
class Comment extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }
  render () {
    console.log(this.props)
    const { user, text } = this.props.comment
    return (
      <div>
        <h4>{user}</h4>
        <p>{text}</p>
      </div>
    )
  }
}

const createMapStateToProps = () => {
  const commentSelector = createCommentSelector()
  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps)
  })
}

export default connect(createMapStateToProps)(Comment)
