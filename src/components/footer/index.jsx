import { Link } from 'react-router-dom'
 
export default function Footer() {
    return (
        <footer>
            <h2>C'est mon footer ici</h2>
            <Link to="/contact">Me contacter !</Link>
        </footer>
    )
}
