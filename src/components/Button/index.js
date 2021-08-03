import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <button onClick={this.props.actionBtn}>{this.props.nome}</button>
    )
  }
}

export default Button