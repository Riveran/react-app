import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { deleteArticle } from '../../actions/index'
import CommentList from '../commentList'
import './style.css'
import { connect } from 'react-redux'

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.object.isRequire,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
  }
  state = {
    isError: false
  }
  componentDidCatch (err) {
    console.log('---', err)
    this.setState({
      isError: true
    })
  }

  render () {
    const { article, isOpen } = this.props
    return (
      <div>
        <div>
          <h3>{article.title}</h3>
          <button onClick={this.handleBtnClick} className='test__article--btn'>
            {isOpen ? 'close' : 'open'}
          </button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
        <CSSTransition
          transitionName='article'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }
  handleDelete = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
  }
  get body () {
    const { article, isOpen } = this.props
    if (!isOpen) return null
    if (this.state.isError) return <div>No comments</div>
    return (
      <section className='test__article--body'>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }

  handleBtnClick = () => this.props.toggleOpen(this.props.article.id)
}

export default connect(
  () => ({}),
  { deleteArticle }
)(Article)
