// STYLE CSS
import '../../styles/home.css'
import falaise from '../../assets/img/falaises.jpg';

export default function Home() {
  
    return (
      <main className="main">
        <section className='main_header'>
        <img src={ falaise } className='img' alt="falaise avec ocean" />
        <p >Chez vous, partout et ailleurs</p>
        </section>
      </main>
    );
}