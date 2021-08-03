import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    }
    this.cadastrar = this.cadastrar.bind(this)
  }

  cadastrar (event) {
    event.preventDefault()

    const {nome, email, senha} = this.state

    const verify = nome && email && senha

    if (verify) {
      alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
      return
    }

    this.setState({error: 'Favor preencher todos os campos do formulário'})

  }

  render () {
    return (
      <div>
        <h1>Novo Usuário</h1>
        {
          this.state.error && <p>{this.state.error}</p>  
        }
        <form onSubmit={this.cadastrar}>
          <label>Nome:</label>
          <input type="text" value={this.state.nome} onChange={(event) => this.setState({ nome: event.target.value})} /> <br/> <br/>
          <label>E-mail:</label>
          <input type="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value})} /> <br/> <br/>
          <label>Senha:</label>
          <input type="password" value={this.state.senha} onChange={(event) => this.setState({ senha: event.target.value})} /> <br/> <br/>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    )
  }
}

export default App