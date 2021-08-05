import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h2>Header da Página</h2>
      <Link to="/">Home</Link><br/>
      <Link to="/sobre">Sobre</Link><br/>
      <Link to="/contato">Contato</Link><br/>
    </div>
  )
}

export default Header