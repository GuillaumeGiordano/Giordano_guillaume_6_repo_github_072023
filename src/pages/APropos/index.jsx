import falaise from '../../assets/img/montagnes.jpg'
import row from '../../assets/row.png'

import useToggle from '../../utils/hooks/useToggle'

export default function APropos() {
  const [value1, changeMe1] = useToggle()
  const [value2, changeMe2] = useToggle()
  const [value3, changeMe3] = useToggle()
  const [value4, changeMe4] = useToggle()

  return (
    <>
      <section className="APropos">
        <img src={falaise} className="header__img" alt="falaise avec ocean" />

        {/* Fiabilité */}
        <div className="collapse-btn" onClick={changeMe1}>
          <span>Fiabilité</span>
          {value1 ? (
            <img src={row} className="row row-top" alt="fléche de navigation"></img>
          ) : (
            <img src={row} className="row row-down" alt="fléche de navigation"></img>
          )}
        </div>
        {value1 ? (
          <div className="collapse-info  down">
            <p>
              Les annonces podtée sur Kasa garantissent une fiabilité total. Les photos
              sont conformes aux logements, et toutes les informations sont régulièrement
              vérifiées par nos équipes.
            </p>
          </div>
        ) : (
          <div className="collapse-info  up">
            <p>
              Les annonces podtée sur Kasa garantissent une fiabilité total. Les photos
              sont conformes aux logements, et toutes les informations sont régulièrement
              vérifiées par nos équipes.
            </p>
          </div>
        )}

        {/* Respect */}
        <div className="collapse-btn" onClick={changeMe2}>
          <span>Respect</span>
          {value2 ? (
            <img src={row} className="row row-top" alt="fléche de navigation"></img>
          ) : (
            <img src={row} className="row row-down" alt="fléche de navigation"></img>
          )}
        </div>
        {value2 && (
          <div className="collapse-info down">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage entraînera une
            exclusion de notre plateforme.
          </div>
        )}

        {/* Service */}
        <div className="collapse" onClick={changeMe3}>
          <span>Service</span>
          {value3 ? (
            <img src={row} className="row row-top" alt="fléche de navigation"></img>
          ) : (
            <img src={row} className="row row-down" alt="fléche de navigation"></img>
          )}
        </div>
        {value3 && (
          <div className="collapse-info">
            {' '}
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage entraînera une
            exclusion de notre plateforme.
          </div>
        )}

        {/* Sécurité */}
        <div className="collapse" onClick={changeMe4}>
          <span>Sécurité</span>
          {value4 ? (
            <img src={row} className="row row-top" alt="fléche de navigation"></img>
          ) : (
            <img src={row} className="row row-down" alt="fléche de navigation"></img>
          )}
        </div>
        {value4 && (
          <div className="collapse-info">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
            voyageurs, chaque logement correspond aux critères de sécurité établis par nos
            services. En laissant une note aussi bien à l'hôte qu'au locataire, cela
            permet à nos équipes de vérifier que les standards sont bien respectés. Nous
            organisons égualement des ateliers sur la sécurité domestique pour nos hôtes.
          </div>
        )}
      </section>
    </>
  )
}
