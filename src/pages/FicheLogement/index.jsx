// SYSTEM
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks/useFetch'
import useFindLogement from '../../utils/hooks/useFindLogement'
import useName from '../../utils/hooks/useName'
import Error from '../Error'
import Loader from '../../components/Loader'
import Collapse from '../../components/Collapse'
import Slider from '../../components/Slider'
import Stars from '../../components/Stars'

export default function FicheLogement() {
  const { data, isLoading, error } = useFetch('../data.json')
  console.log(data)
  const { idLogement } = useParams()
  const [logement] = useFindLogement(isLoading, data, idLogement)
  const [nameSplit] = useName(isLoading, logement)

  if (error) {
    return (
      <>
        <span>Il y a un problème</span>
        <Loader />
      </>
    )
  }
  if (isLoading) {
    return <Loader />
  }
  if (!logement || !nameSplit) {
    return <Error />
  }

  return (
    <>
      <section className="accomodation" id={logement.id}>
        <Slider cover={logement.cover} pictures={logement.pictures} />
        <div className="accomodation__body">
          <div className="infos">
            <h1 className="infos__title">{logement.title}</h1>
            <p className="infos__location">{logement.location}</p>
            <ul className="infos__tags">
              {logement.tags.map((tag, index) => (
                <li key={index} className="infos__tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="side">
            <div className="profil">
              <div className="profil__boxName">
                <p className="profil__name">{nameSplit[0]}</p>
                <p className="profil__name">{nameSplit[1]}</p>
              </div>

              <img className="profil__img" src={logement.host.picture} alt="" />
            </div>
            <Stars rating={logement.rating} />
          </div>
        </div>
        <div className="accomodation__footer">
          <Collapse title="Description" width="width--45">
            {/* CHILDREEN */}
            <p className="">{logement.description}</p>
          </Collapse>
          <Collapse title="Equipements" width="width--45">
            {/* CHILDREEN */}
            <ul className="equipments">
              {logement.equipments.map((item, index) => (
                <li key={index} className="equipments__item">
                  {item}
                </li>
              ))}
            </ul>
          </Collapse>
        </div>
      </section>
    </>
  )
}
