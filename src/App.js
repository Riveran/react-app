import React from 'react'
import ArticleList from './components/articleList'
import articles from './components/fixtures'
import './App.css'
import UserForm from './components/user-form'
import Filters from './components/filters/index'
import Counter from './components/counter'

class App extends React.Component {
  render () {
    return (
      <div>
        <UserForm />
        <Filters articles={[]} />
        <ArticleList />
        <Counter />
      </div>
    )
  }
}

export default App
