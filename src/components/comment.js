import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Comment extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired
  }
  render () {
    const { user, text } = this.props.comment
    return (
      <div>
        <h4>{user}</h4>
        <p>{text}</p>
      </div>
    )
  }
}

export default connect((state, ownProps) => ({
  comment: state.comments.find(comment => comment.id === ownProps.id)
}))(Comment)
