// SYSTEM
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks/useFetch'
import Loader from '../../components/Loader'
import Logement from '../../components/Logement'

export default function FicheLogement() {
  const { indexlogement } = useParams()
  const { data, isLoading, error } = useFetch(`/data.json`)

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <>
      {/* Opération ternaire */}
      {isLoading ? <Loader /> : <Logement data={data[indexlogement]} />}
    </>
  )
}
