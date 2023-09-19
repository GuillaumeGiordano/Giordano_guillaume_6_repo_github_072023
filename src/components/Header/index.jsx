import logo from '../../assets/logo/LOGO.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <nav className="header__nav">
        <ul className="header__menu">
          <li id="accueil" className="menu__item">
            <NavLink
              className={({ isActive }) => (isActive ? 'menu__item--active' : '')}
              to="/Kasa"
            >
              Accueil
            </NavLink>
          </li>

          <li id="apropos" className="menu__item">
            <NavLink
              className={({ isActive }) => (isActive ? 'menu__item--active' : '')}
              to="/Kasa/APropos"
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
