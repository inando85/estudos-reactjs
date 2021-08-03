import React, { useState } from 'react'

function App () {

  const [contador, setContador] = useState(0)

  const handleIncrement = () => {
    setContador(contador + 1)
  }
  const handleDecrement = () => {
    setContador(contador - 1)
  }

  return (
    <div>
      <h1>Hooks - useState</h1>
      <h4>{contador}</h4>
      <button onClick={handleIncrement}>Adicionar</button>
      <button onClick={handleDecrement}>Remover</button>
    </div>
  )
}

export default App