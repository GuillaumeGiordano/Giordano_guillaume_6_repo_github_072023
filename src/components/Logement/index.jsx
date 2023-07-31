import React, { useEffect, useState } from 'react'
import Collapse from '../Collapse'
import star_full from '../../assets/star_full.png'
import star_empty from '../../assets/star_empty.png'

export default function Logement({ data }) {
  const { id, title, cover, location, host, tags, rating, description } = data

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

  console.log(data)

  return (
    <section className="accomodation" id={id}>
      {/* {JSON.stringify(data.host)} */}
      {/* Mettre le carrousel !!!! */}
      <img src={cover} className="accomodation__head" alt="falaise avec ocean" />

      <div className="accomodation__body">
        <div className="infos">
          <h1 className="infos__title">{title}</h1>
          <p className="infos__location">{location}</p>
          <ul className="infos__tags">
            {tags.map((tag) => (
              <li className="infos__tag">{tag}</li>
            ))}
          </ul>
        </div>

        <div className="side">
          <div className="profil">
            <p className="profil__name">{host.name}</p>
            <img className="profil__img" src={host.picture} alt="" />
          </div>
          <div className="stars">
            {useStars(rating).map((star) =>
              star === 'full' ? (
                <img
                  src={star_full}
                  className=""
                  alt="star full pink"
                  width="24px"
                  height="24px"
                />
              ) : (
                <img
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
        {/* <div className="footer__left"> */}
        <Collapse title="Description" description={description} width="45%" />
        {/* </div>
        <div className="footer__right"> */}
        <Collapse title="Equipements" description={description} width="45%" />
        {/* </div> */}
      </div>
    </section>
  )
}
