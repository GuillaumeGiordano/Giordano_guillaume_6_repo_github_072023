import { useState, useEffect } from 'react'

export default function useFindLogement(isLoading, data, idLogement) {
  const [logement, setLogement] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      const logementFound = data.find((item) => item.id === idLogement)
      if (logementFound) {
        setLogement(logementFound)
      }
    }
  }, [isLoading, data, idLogement])

  return [logement]
}
