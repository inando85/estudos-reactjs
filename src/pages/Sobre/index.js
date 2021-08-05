import { Link } from 'react-router-dom'

function Sobre () {
  return (
    <div>
      <h1>Sobre</h1>
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
    </div>
  )
}

export default Sobre