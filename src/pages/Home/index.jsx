// SYSTEM
import { Link } from 'react-router-dom'
import { useFetch } from '../../utils/hooks/useFetch'
// COMPONENTS
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import falaise from '../../assets/img/falaises.jpg'

export default function Home() {
  const { data, isLoading, error } = useFetch(`data.json`)

  if (error) {
    return <span>Il y a un problème</span>
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <section className="main__header">
        <img src={falaise} className="header__img" alt="falaise avec ocean" />
        <p className="header__title">Chez vous, partout et ailleurs</p>
      </section>

      {isLoading ? (
        <Loader />
      ) : (
        <section className="main__ctn">
          {data.map(
            // MAP ==> methode comme foreach voir doc !
            (logement) => (
              <Link
                className="link"
                key={logement.id}
                to={'/FicheLogement/' + logement.id}
              >
                <Card
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
