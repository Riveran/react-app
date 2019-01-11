import React from 'react'

class UserForm extends React.Component {
  state = {
    userValue: ''
  }
  render () {
    return (
      <div>
        Username:{' '}
        <input value={this.state.userValue} onChange={this.handleChange} />
      </div>
    )
  }
  handleChange = e => {
    this.setState({ userValue: e.target.value })
  }
}

export default UserForm
