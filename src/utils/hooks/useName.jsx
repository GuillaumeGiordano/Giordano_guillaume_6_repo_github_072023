import { useState, useEffect } from 'react'

// SPLIT LE NOM ET PRENOM
export default function useName(isLoading, logement) {
  const [nameSplit, setNameSplit] = useState([])

  useEffect(() => {
    if (!isLoading) {
      if (logement) {
        const makeSplit = logement.host.name.split(' ')

        if (makeSplit) {
          setNameSplit((i) => [...i, makeSplit])
        }
      }
    }
  }, [isLoading, logement])
  return nameSplit
}
