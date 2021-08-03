import React, { Component } from 'react'
import './App.css'

import Biscoito from './assets/biscoito.png';

import Button from './components/Button'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      frase: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.', 
      'Realize o óbvio, pense no improvável e conquiste o impossível.', 
      'Acredite em milagres, mas não dependa deles.', 
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]
  }

  quebraBiscoito () {
    let state = this.state
    let randomNumber = Math.floor(Math.random() * this.frases.length)
    
    state.frase = `" ${this.frases[randomNumber]} "`

    this.setState(state)
  }

  render () {
    return (
      <div className="container">
        <img src={Biscoito} alt="Biscoito da Sorte" className="image" />
        <Button nome="Abrir Biscoito" actionBtn={this.quebraBiscoito} />
        <h3 className="text">{this.state.frase}</h3>
      </div>
    )
  }
}

export default App