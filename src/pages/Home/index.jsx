// SYSTEM
import { Link } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
// COMPONENTS
import MainHead from '../../components/MainHead'
import Card from '../../components/Card'
import Loader from '../../components/Loader'

export default function Home() {
  const { data, isLoading, error } = useFetch(`data.json`)

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <>
      <MainHead />

      {isLoading ? (
        <Loader />
      ) : (
        <section className="main__ctn">
          {data.map(
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
    </>
  )
}
