import { useState, useEffect } from 'react'

// SPLIT LE NOM ET PRENOM
export default function useName(isLoading, logement) {
  const [nameSplit, setNameSplit] = useState([])

  useEffect(() => {
    if (!isLoading) {
      if (logement) {
        const makeSplit = logement.host.name.split(' ')

        if (makeSplit) {
          //   makeSplit.forEach((element) => {
          //     setNameSplit((addName) => [...addName, element])
          //   })
          setNameSplit((i) => [...i, makeSplit])
        }
      }
    }
  }, [isLoading, logement])
  console.log(nameSplit)

  return nameSplit
}
