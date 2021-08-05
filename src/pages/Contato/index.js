import { Link } from 'react-router-dom'

function Contato () {
  return (
    <div>
      <h1>Contato</h1>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
    </div>
  )
}

export default Contato