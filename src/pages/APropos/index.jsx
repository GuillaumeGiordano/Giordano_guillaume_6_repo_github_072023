// STYLE CSS
import '../../styles/aPropos.css'
import falaise from '../../assets/img/montagnes.jpg'

export default function APropos() {
  return (
    <>
      <section className="main_header">
        <img src={falaise} className="img" alt="falaise avec ocean" />
        <ul>
          <li>Fiabilité</li>
          <li>Respect</li>
          <li>Service</li>
          <li>Sécurité</li>
        </ul>
      </section>
    </>
  )
}
