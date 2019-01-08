import React from 'react'
import ArticleList from './components/articleList'
import article from './components/fixtures'
import './App.css'

class App extends React.Component {
  render () {
    return <ArticleList article={article} />
  }
}

export default App
