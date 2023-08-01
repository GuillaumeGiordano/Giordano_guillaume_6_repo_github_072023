// SYSTEM
import { Link } from 'react-router-dom'
// import { useFetch } from '../../utils/hooks/useFetch'
// COMPONENTS
import MainHead from '../../components/MainHead'
import Card from '../../components/Card'
import Loader from '../../components/Loader'

export default function Home({ data, isLoading }) {
  // const { data, isLoading, error } = useFetch(`data.json`)

  return (
    <>
      <MainHead />

      {isLoading ? (
        <Loader />
      ) : (
        <section className="main__ctn">
          {data.map(
            // MAP ==> methode comme foreach voir doc !
            (logement, index) => (
              <Link key={index} to={'/FicheLogement/' + index}>
                <Card
                  // index={index}
                  id={logement.id}
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
