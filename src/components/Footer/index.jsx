import logo from '../../assets/vector.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__titre">
        K<img src={logo} className="footer__logo" alt="house logo" />
        sa
      </h2>
      <p className="footer__text">&copy; 2020 Kasa. All rights reserved.</p>
    </footer>
  )
}
