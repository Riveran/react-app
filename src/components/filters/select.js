import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../actions/index'

class SelectFilter extends Component {
  render () {
    return (
      <div>
        <Select
          options={this.options}
          value={this.props.selected}
          onChange={this.handleChange}
        />
      </div>
    )
  }

  handleChange = selected => {
    this.props.changeSelection(selected)
  }

  get options () {
    const { articles } = this.props
    return articles.map(article => ({
      label: article.title,
      value: article.id
    }))
  }
}

export default connect(
  state => ({
    selected: state.filters.selected,
    articles: state.articles
  }),
  { changeSelection }
)(SelectFilter)
