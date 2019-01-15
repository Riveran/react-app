import React from 'react'
import Article from './article/index'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import accordion from '../decorators/accordion'

class ArticleList extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    toggleOpenItem: PropTypes.func.isRequired,
    openItemId: PropTypes.bool.isRequired
  }
  render () {
    return <ul>{this.body}</ul>
  }

  get body () {
    const { toggleOpenItem, openItemId, articles } = this.props

    return articles.map(article => (
      <li key={article.id} className='test__article-list--item'>
        <Article
          article={article}
          comments={article.comments}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }
}

const ArticleListWithAccordion = accordion(ArticleList)

export default connect(state => ({
  articles: state.articles
}))(ArticleListWithAccordion)
