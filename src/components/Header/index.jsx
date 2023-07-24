import logo from '../../assets/logo/LOGO.svg'
// SYSTEME
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul className="menu">
          <li className="menu_item">
            <Link to="/">Acceuil</Link>
          </li>
          <li className="menu_item">
            <Link to="/APropos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
