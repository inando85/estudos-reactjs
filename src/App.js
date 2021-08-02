import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super (props)
    this.state = {
      contador: 0
    }

    this.aumentar = this.aumentar.bind(this)
    this.diminuir = this.diminuir.bind(this)
  }

  aumentar () {
    let state = this.state
    state.contador++
    this.setState(state)
  }

  diminuir () {
    let state = this.state
    state.contador--
    this.setState(state)

    if (state.contador < 0 ) {
      state.contador = 0
    }
  }
  render () {
    return (
      <div>
        <h1>Contador:</h1>
        <h3>{ this.state.contador}</h3>
        <button onClick={this.diminuir}>-</button>
        <button onClick={this.aumentar}>+</button>
      </div>
    )
  }
}

export default App