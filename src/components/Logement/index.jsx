import React, { useEffect, useState } from 'react'
import Collapse from '../Collapse'
import Slider from '../Slider'
// IMAGES
import star_full from '../../assets/star_full.png'
import star_empty from '../../assets/star_empty.png'

export default function Logement({ data }) {
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

  function useStars(rating) {
    const [stars, setStars] = useState([])

    useEffect(() => {
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          setStars((star) => [...star, 'full'])
        } else {
          setStars((star) => [...star, 'empty'])
        }
      }
    }, [rating])

    return stars
  }

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
          <div className="stars">
            {useStars(rating).map((star, index) =>
              star === 'full' ? (
                <img
                  key={index}
                  src={star_full}
                  className=""
                  alt="star full pink"
                  width="24px"
                  height="24px"
                />
              ) : (
                <img
                  key={index}
                  src={star_empty}
                  className=""
                  alt="star empty grey"
                  width="24px"
                  height="24px"
                />
              )
            )}
          </div>
        </div>
      </div>

      <div className="accomodation__footer">
        <Collapse title="Description" width="45%">
          <p className="">{description}</p>
        </Collapse>

        <Collapse title="Equipements" width="45%">
          {/* <p className="collapse__content-childreen">{description}</p> */}
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
