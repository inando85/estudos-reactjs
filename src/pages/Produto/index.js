import { useParams } from 'react-router-dom'

function Produto () {
  const { id } = useParams()

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <span>Produto Selecionado: { id }</span>
    </div>
  )
}

export default Produto