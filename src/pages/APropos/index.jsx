import falaise from '../../assets/img/montagnes.jpg'
import Collapse from '../../components/Collapse'

export default function APropos() {
  return (
    <>
      <section className="aPropos">
        <img src={falaise} className="header__img" alt="falaise avec ocean" />
        <Collapse title="Fiabilité" width="80%">
          <p className="">
            Les annonces podtée sur Kasa garantissent une fiabilité total. Les photos sont
            conformes aux logements, et toutes les informations sont régulièrement
            vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse title="Respect" width="80%">
          <p className="">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage entraînera une
            exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse title="Service" width="80%">
          <p className="">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage entraînera une
            exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse title="Sécurité" width="80%">
          <p className="">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
            voyageurs, chaque logement correspond aux critères de sécurité établis par nos
            services. En laissant une note aussi bien à l'hôte qu'au locataire, cela
            permet à nos équipes de vérifier que les standards sont bien respectés. Nous
            organisons égualement des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </section>
    </>
  )
}
