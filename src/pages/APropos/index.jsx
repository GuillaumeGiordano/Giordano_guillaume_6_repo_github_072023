import falaise from '../../assets/img/montagnes.jpg'
import Collapse from '../../components/Collapse'

export default function APropos() {
  return (
    <>
      <section className="APropos">
        <img src={falaise} className="header__img" alt="falaise avec ocean" />
        <Collapse
          title="Fiabilité"
          description="Les annonces podtée sur Kasa garantissent une fiabilité total. Les photos
      sont conformes aux logements, et toutes les informations sont régulièrement
      vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage entraînera une
          exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage entraînera une
          exclusion de notre plateforme."
        />
        <Collapse
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
          voyageurs, chaque logement correspond aux critères de sécurité établis par nos
          services. En laissant une note aussi bien à l'hôte qu'au locataire, cela
          permet à nos équipes de vérifier que les standards sont bien respectés. Nous
          organisons égualement des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </>
  )
}
