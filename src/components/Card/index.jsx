//STYLES
import '../../styles/card.css'
// SYSTEME
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Card({ id , title, cover, description }) {
    return (
        <Link to={"FicheLogement/" + id}>  
        <div className="card">
            <span><img src={cover} className='img-gallery' alt={description} height={340} width={340} />{title}</span>
        </div></Link>
    )
}

// Autre methode pour export la fonction
export default Card

// Permet de typer les variables !!! 
Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired, //permet d'exiger une valeur !!!
    picture: PropTypes.string,
    alt: PropTypes.string
}
// Permet de definir une valeur par defaut sans faire buger le typage !
Card.defaultProps = {
    title: 'Mon titre par défaut',
}