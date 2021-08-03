import React, { useState, useEffect, useMemo } from 'react'

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

  const totalTarefas = useMemo(() => tarefas.length, [tarefas])


  return (
    <div>
      <h1>Hooks - useMemo</h1>

      <ul>
        {
          tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))
        }
      </ul><br/>

      <strong>Você tem {totalTarefas} tarefas!</strong><br/><br/>
      <input type="text" value={input} onChange={(event) => setInput(event.target.value)}/> <br/><br/>
      <button onClick={handleAdd}>Adicionar Tarefa</button>
    </div>
  )
}

export default App