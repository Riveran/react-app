import React from 'react'
import ArticleList from './components/articleList'
import articles from './components/fixtures'
import './App.css'
import UserForm from './components/user-form'
import Filters from './components/filters/index'

class App extends React.Component {
  render () {
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
