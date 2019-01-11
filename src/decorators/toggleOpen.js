import React, { Component as ReactComponent } from 'react'

export default OriginalComponent =>
  class ToggleOpen extends ReactComponent {
    state = {
      isOpen: false
    }

    openItem = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }

    render () {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          stateComments={this.state.isOpen}
          isOpen={this.openItem}
        />
      )
    }
  }
