import { Link } from 'react-router-dom'
 
export default function Header() {
    return (
        <header className="">
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/page1">Ma page 1</Link>
        </nav>
        </header> 
    )
}
