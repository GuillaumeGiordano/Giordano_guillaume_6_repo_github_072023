// PHOTOS
import falaise from '../../assets/img/falaises.jpg'

export default function MainHead() {
  return (
    <section className="main__header">
      {/* Faire une condition VOIR PARAM
      Si je suis sur home alors tu affiche la falaise + texte 
      SINON
      tu affiche l'autre photo pour APropos
      */}
      <img src={falaise} className="header__img" alt="falaise avec ocean" />
      <p className="header__title">Chez vous, partout et ailleurs</p>
    </section>
  )
}
