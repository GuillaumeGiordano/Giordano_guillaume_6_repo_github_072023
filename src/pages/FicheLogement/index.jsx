// SYSTEM
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../../utils/hooks/useFetch'
import Loader from '../../components/Loader'
import Collapse from '../../components/Collapse'
import Slider from '../../components/Slider'
import Stars from '../../components/Stars'

export default function FicheLogement() {
  const { data, isLoading, error } = useFetch(`/data.json`)
  const { indexLogement } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading) {
      const maxItems = data.length
      if (indexLogement > maxItems) {
        navigate('/error')
      }
    }
  })

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <>
      {/* Opération ternaire */}
      {isLoading ? (
        <Loader />
      ) : (
        <section className="accomodation" id={data[indexLogement].id}>
          <Slider
            cover={data[indexLogement].cover}
            pictures={data[indexLogement].pictures}
          />
          <div className="accomodation__body">
            <div className="infos">
              <h1 className="infos__title">{data[indexLogement].title}</h1>
              <p className="infos__location">{data[indexLogement].location}</p>
              <ul className="infos__tags">
                {data[indexLogement].tags.map((tag, index) => (
                  <li key={index} className="infos__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="side">
              <div className="profil">
                <p className="profil__name">{data[indexLogement].host.name}</p>
                <img
                  className="profil__img"
                  src={data[indexLogement].host.picture}
                  alt=""
                />
              </div>
              <Stars rating={data[indexLogement].rating} />
            </div>
          </div>
          <div className="accomodation__footer">
            <Collapse title="Description" width="45%">
              <p className="">{data[indexLogement].description}</p>
            </Collapse>
            <Collapse title="Equipements" width="45%">
              <ul className="equipments">
                {data[indexLogement].equipments.map((item, index) => (
                  <li key={index} className="equipments__item">
                    {item}
                  </li>
                ))}
              </ul>
            </Collapse>
          </div>
        </section>
      )}
    </>
  )
}
