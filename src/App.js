import React, { Component } from 'react'
import './App.css'

import Cronometro from './assets/cronometro.png'
class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      number: 0,
      button: 'Iniciar'
    }

    this.timer = null
    this.iniciar = this.iniciar.bind(this)
    this.zerar = this.zerar.bind(this)
  }

  iniciar () {
    let state = this.state

    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
      state.button = 'Iniciar'
    } else {
      this.timer = setInterval(() => {
        state.number += 0.1
        this.setState(state)
      }, 100)
      state.button = 'Pausar'
    }

    this.setState(state)
  }

  zerar () {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }

    let state = this.state
    state.number = 0
    state.button = 'Iniciar'
    this.setState(state)
  }

  render () {
    return (
      <div className="container">
        <img src={Cronometro} alt="Cronometro" className="image" />
        <p className="timer">{this.state.number.toFixed(1)}</p>

        <div className="areaBtn">
          <button className="btn" onClick={this.iniciar}>{this.state.button}</button>
          <button className="btn" onClick={this.zerar}>Zerar</button>
        </div>
      </div>
    )
  }
}

export default App