import { useState, useEffect } from 'react'

export default function useStars(rating) {
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
