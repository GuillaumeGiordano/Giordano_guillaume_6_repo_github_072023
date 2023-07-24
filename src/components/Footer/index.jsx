import logo from '../../assets/vector.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <h2>
        K<img src={logo} className="house-logo" alt="house logo" />
        sa
      </h2>
      <p>&copy; 2020 Kasa. All rights reserved.</p>
    </footer>
  )
}
