import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentList from './commentList'

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.object.isRequire,
    isOpen: PropTypes.bool,
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
        </div>
        {this.body}
      </div>
    )
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

export default Article
