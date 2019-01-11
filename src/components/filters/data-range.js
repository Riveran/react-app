import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class DataRange extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = day => {
    this.setState(DateUtils.addDayToRange(day, this.state))
  }

  render () {
    const { from, to } = this.props
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
