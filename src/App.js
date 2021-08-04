import { useState, useEffect } from 'react'
import './App.css'

function App () {

  const [nutri, setNutri] = useState([])

  useEffect(() => {
    function loadApi () {
      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

      fetch(url)
        .then(response => response.json())
        .then((json) => {
          setNutri(json)
        })
    }

    loadApi()
  }, [])

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {
        nutri.map((item) => {
          return (
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="capa"/>
              <p className="subtitulo">{item.subtitulo}</p>
              <button className="botao">Acessar</button>
            </article>
          )
        })
      }
    </div>
  )
}

export default App