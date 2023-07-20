//STYLES
import '../../styles/card.css'
// SYSTEME
import PropTypes from 'prop-types'

function Card({ title, cover, description }) {
  return (
    <div className="card">
      <span>
        <img
          src={cover}
          className="img-gallery"
          alt={description}
          height={340}
          width={340}
        />
        {title}
      </span>
    </div>
  )
}

// Autre methode pour export la fonction
export default Card

// Permet de typer les variables !!!
Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired, //permet d'exiger une valeur !!!
  picture: PropTypes.string,
  alt: PropTypes.string,
}
// Permet de definir une valeur par defaut sans faire buger le typage !
Card.defaultProps = {
  title: 'Mon titre par défaut',
}
