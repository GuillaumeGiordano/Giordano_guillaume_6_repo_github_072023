// SYSTEM
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import Loader from '../../components/Loader'

export default function FicheLogement() {
  const { idlogement } = useParams()
  const { data, isLoading, error } = useFetch(`/data.json`)

  if (error) {
    return <span>Il y a un problème</span>
  }

  console.log(data[0].id)

  return (
    <>
      {/* Opération ternaire */}
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1>Fiche Logement N° {idlogement}</h1>
          <h2>titre : </h2>
        </section>
      )}
    </>
  )
}
