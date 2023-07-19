// STYLE CSS
import '../../styles/ficheLogement.css'
// Système
import { useParams } from 'react-router-dom';

export default function FicheLogement() {

  const { monParam } = useParams()

    return (
      <main className="">
      <h1>Fiche Logement 🧮</h1>
      <h2>logement N°  { monParam } </h2>
      </main>
    );
}