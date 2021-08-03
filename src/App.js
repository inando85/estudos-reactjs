import React, { useState, useEffect } from 'react'

function App () {

  const [tarefas, setTarefas] = useState([])

  const [input, setInput] = useState('')

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas')

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }

    // Caso quisermos fazer algo quando o componente for desmontado, basta usar a forma abaixo, rtornando a função que deve ser executada.
    return () => {}
  }, [])


  // Monitorando alterações no state tarefas
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  const handleAdd = ()=> {
    setTarefas([...tarefas, input])
    setInput('')
  }


  return (
    <div>
      <h1>Hooks - useEffect</h1>

      <ul>
        {
          tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))
        }
      </ul>
      <input type="text" value={input} onChange={(event) => setInput(event.target.value)}/> <br/><br/>
      <button onClick={handleAdd}>Adicionar Tarefa</button>
    </div>
  )
}

export default App