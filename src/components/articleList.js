import React from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends React.Component {
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

export default ArticleListWithAccordion
