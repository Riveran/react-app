import React, { Component } from 'react'
import SelectFilter from './select'
import DataRange from './data-range'

export default class Filters extends Component {
  render () {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DataRange />
      </div>
    )
  }
}
