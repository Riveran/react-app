import React, { Component } from 'react'
import Comment from './comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'
import './article/style.css'

class CommentList extends Component {
  static propTypes = {
    statteComments: PropTypes.bool.isRequired,
    comments: PropTypes.object.isRequired
  }
  render () {
    const { stateComments } = this.props
    return (
      <section>
        <button onClick={this.props.isOpen}>
          {stateComments ? 'hide' : 'show'}
        </button>
        <CSSTransition
          transitionName='article'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.getbody()}
        </CSSTransition>
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
