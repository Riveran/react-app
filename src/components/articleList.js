import React from 'react'
import Article from './article/index'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import accordion from '../decorators/accordion'
import { filtratedArticles } from '../selectors/index'

class ArticleList extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    toggleOpenItem: PropTypes.func,
    openItemId: PropTypes.string
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

export default connect(state => {
  return {
    articles: filtratedArticles(state)
  }
})(accordion(ArticleList))
