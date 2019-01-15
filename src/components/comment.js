import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired
  }
  render () {
    const { user, text } = this.props.comment
    console.log(this.props.comment)
    return (
      <div>
        <h4>{user}</h4>
        <p>{text}</p>
      </div>
    )
  }
}
