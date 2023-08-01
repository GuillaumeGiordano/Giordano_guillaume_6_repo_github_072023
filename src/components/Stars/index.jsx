import React from 'react'
import useStars from '../../utils/hooks/useStars'
// IMAGES
import star_full from '../../assets/star_full.png'
import star_empty from '../../assets/star_empty.png'

export default function Stars({ rating }) {
  const stars = useStars(rating)

  return (
    <div className="stars">
      {stars.map((star, index) =>
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
  )
}
