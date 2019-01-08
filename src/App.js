import React from 'react'
import Select from 'react-select'
import DayPicker from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import ArticleList from './components/articleList'
import articles from './components/fixtures'
import './App.css'

class App extends React.Component {
  state = {
    openItem: ''
  }

  render () {
    return (
      <div>
        <Select
          options={this.options}
          value={this.state.openItem}
          onChange={this.handleChange}
        />
        <DayPicker />
        <DayPickerInput />
        <ArticleList articles={articles} />
      </div>
    )
  }

  handleChange = openItem => this.setState({ openItem })

  get options () {
    return articles.map(article => ({
      label: article.title,
      value: article.id
    }))
  }
}

export default App
