import { Link } from 'react-router-dom'

function Error () {
  return (
    <div>
      <h1>Hmm, parece que esta página não existe!</h1>

      <span>Você pode estar procurando:</span>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </div>
  )
}

export default Error