import { useState, useEffect } from 'react'

export default function useFindLogement(isLoading, data, idLogement) {
  const [logement, setLogement] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      try {
        console.log(data)
        const logementFound = data.find((item) => item.id === idLogement)
        if (logementFound) {
          setLogement(logementFound)
        }
      } catch (error) {
        console.log('ca ne marche pas !')
      }
    }
  }, [isLoading, data, idLogement])

  return [logement]
}
