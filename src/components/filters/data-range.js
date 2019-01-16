import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDateRange } from '../../actions/index'
import 'react-day-picker/lib/style.css'

class DataRange extends Component {
  handleDayClick = day => {
    const { changeDateRange, range } = this.props
    changeDateRange(DateUtils.addDayToRange(day, range))
  }

  render () {
    console.log(this.props)
    const { from, to } = this.props.range
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className='date-range'>
        <DayPicker
          selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  state => ({
    range: state.filters.dateRange
  }),
  { changeDateRange }
)(DataRange)
