import { useEffect } from 'react'
import Collapse from '../Collapse'
import Slider from '../Slider'
// IMAGES
import Stars from '../Stars'
import { useNavigate } from 'react-router-dom'

export default function Logement({ data, maxItems, params }) {
  const navigate = useNavigate()

  function useIfExist(data) {
    useEffect(() => {
      if (!data) return

      if (params > maxItems) {
        return navigate('/')
      }
    }, [data])
  }
  useIfExist(data)

  const {
    id,
    title,
    cover,
    location,
    host,
    tags,
    rating,
    description,
    equipments,
    pictures,
  } = data

  return (
    <section className="accomodation" id={id}>
      <Slider cover={cover} pictures={pictures} />

      <div className="accomodation__body">
        <div className="infos">
          <h1 className="infos__title">{title}</h1>
          <p className="infos__location">{location}</p>
          <ul className="infos__tags">
            {tags.map((tag, index) => (
              <li key={index} className="infos__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="side">
          <div className="profil">
            <p className="profil__name">{host.name}</p>
            <img className="profil__img" src={host.picture} alt="" />
          </div>
          <Stars rating={rating} />
        </div>
      </div>

      <div className="accomodation__footer">
        <Collapse title="Description" width="45%">
          <p className="">{description}</p>
        </Collapse>
        <Collapse title="Equipements" width="45%">
          <ul className="equipments">
            {equipments.map((item, index) => (
              <li key={index} className="equipments__item">
                {item}
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  )
}
