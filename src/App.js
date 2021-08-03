import React, { useState } from 'react'

function App () {

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ])

  const [input, setInput] = useState('')

  const handleAdd = () => {
    setTarefas([...tarefas, input])
    setInput('')
  }


  return (
    <div>
      <h1>Hooks - useState</h1>

      <ul>
        {
          tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))
        }
      </ul>
      <input type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  )
}

export default App