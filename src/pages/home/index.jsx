// SYSTEM
import { Link } from 'react-router-dom'
// import { useFetch } from '../utils/hooks'
// STYLE CSS
import '../../styles/home.css'
// COMPONENTS
import MainHead from '../../components/MainHead'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
// DATAS
import { myDataJSON } from './test.js'

export default function Home() {
  const myData = myDataJSON()
  const isLoading = false

  // const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
  // const { myData } = data
  // if (error) {
  //   return <span>Il y a un problème</span>
  // }

  return (
    <main className="main">
      <MainHead />

      {isLoading ? (
        <Loader />
      ) : (
        <section className="main__ctn">
          {myData.map(
            (
              logement // MAP ==> methode comme foreach voir doc !
            ) => (
              <Link to={'/FicheLogement/' + logement.id}>
                <Card
                  key={logement.id}
                  cover={logement.cover}
                  title={logement.title}
                  description={logement.description}
                />
              </Link>
            )
          )}
        </section>
      )}
    </main>
  )
}
