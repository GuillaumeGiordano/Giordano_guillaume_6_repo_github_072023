// STYLE CSS
import '../../styles/ficheLogement.css'
// Système
import { useParams } from 'react-router-dom'

export default function FicheLogement() {
  const { idlogement } = useParams()

  return (
    <main className="">
      <h1>Fiche Logement</h1>

      <h2>logement N° {idlogement} </h2>
    </main>
  )
}
