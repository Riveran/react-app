import React from 'react'
import DayPicker from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import ArticleList from './components/articleList'
import articles from './components/fixtures'
import './App.css'
import UserForm from './components/user-form'
import Selects from './components/filters/index'

class App extends React.Component {
  state = {
    openItem: ''
  }

  render () {
    return (
      <div>
        <Selects />
        <UserForm />
        <DayPicker />
        <DayPickerInput />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
