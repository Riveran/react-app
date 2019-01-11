import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
  render () {
    const { stateComments } = this.props
    return (
      <section>
        <button onClick={this.props.isOpen}>
          {stateComments ? 'hide' : 'show'}
        </button>
        {this.getbody()}
      </section>
    )
  }

  getbody () {
    const { comments, stateComments } = this.props
    if (!stateComments) return null
    const body =
      comments && comments.length ? (
        <ul>
          {console.log(comments.length)}
          {comments.map(comment => (
            <li key={comments.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <h3>No comments yet</h3>
      )
    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
