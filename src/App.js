import React from 'react'

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={ props.nome } cargo={ props.cargo } idade={ props.idade } />
      <Social facebook={ props.facebook } linkedin={ props.linkedin } youtube={ props.youtube }/>
      <hr />
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá, sou o(a) { props.nome }</h2>
      <h3>Cargo: { props.cargo }</h3>
      <h3>Idade: { props.idade } anos</h3>
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <a href={ props.facebook }>Facebook </a>
      <a href={ props.linkedin }>LinkedIn </a>
      <a href={ props.youtube }>Youtube</a>
    </div>
  )
}

const App = () => {
  return (
    <>
    <h1>Conheça nossa equipe:</h1>
    <Equipe nome="Fernando" cargo="Programador" idade="35" facebook="https://facebook.com" linkedin="https://linkedin.com" youtube="https://youtube.com"/>
    <Equipe nome="Lucas" cargo="Designer" idade="29" facebook="https://facebook.com" linkedin="https://linkedin.com" youtube="https://youtube.com" />
    </>
  )
}
export default App