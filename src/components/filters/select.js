import React, { Component } from 'react'
import Select from 'react-select'

export default class SelectFilter extends Component {
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
      </div>
    )
  }

  handleChange = openItem => this.setState({ openItem })

  get options () {
    const { articles } = this.props
    return articles.map(article => ({
      label: article.title,
      value: article.id
    }))
  }
}
