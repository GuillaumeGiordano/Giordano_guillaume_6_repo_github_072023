// SYSTEM

// STYLE CSS
import '../../styles/home.css'
// PHOTOS
import falaise from '../../assets/img/falaises.jpg';
// COMPONENTS
import Card from '../../components/Card';
// DATAS
import { myDataJSON } from './test.js';


export default function Home() {
  
const myData = myDataJSON()

  return (
    <main className="main">

      <section className='main_header'>
        <img src={ falaise } className='img' alt="falaise avec ocean" />
        <p >Chez vous, partout et ailleurs</p>
      </section>

      <section className="contener">
      {myData.map((logement) => ( // MAP ==> methode comme foreach voir doc !
              <Card
                  key={logement.id}
                  id={logement.id}
                  cover={logement.cover}
                  title={logement.title}
                  description={logement.description}

              />
          ))}
      </section>

    </main>
  );
}