import React from 'react'
import Collapse from '../Collapse'

export default function Logement({ data }) {
  const { id, title, cover, location, host, tags, rating, description } = data

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
          <div className="stars">{rating}</div>
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
