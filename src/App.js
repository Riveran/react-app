import React from 'react'
import ArticleList from './components/articleList'
import articles from './components/fixtures'
import './App.css'

class App extends React.Component {
  render () {
    return <ArticleList articles={articles} />
  }
}

export default App
