// SYSTEME
import PropTypes from 'prop-types'

function Card({ title, cover, description }) {
  return (
    <article className="card">
      <img src={cover} className="card__img" alt={description} height={340} width={340} />
      <div className="card__title">
        <span>{title}</span>
      </div>
    </article>
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
