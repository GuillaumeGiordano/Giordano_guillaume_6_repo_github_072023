// SYSTEME
import PropTypes from 'prop-types'

function Card({ id, title, cover, description }) {
  return (
    <article className="card" id={'card-' + id}>
      <img
        src={cover}
        className="card__img"
        id={'img-' + id}
        alt={description}
        height={340}
        width={340}
      />
      <div className="card__title" id={'filtre-' + id}>
        <span id={'title-' + id}>{title}</span>
      </div>
    </article>
  )
}

// Autre methode pour export la fonction
export default Card

// Permet de typer les variables !!!
Card.propTypes = {
  id: PropTypes.string.isRequired, //permet d'exiger une valeur !!!
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
  description: PropTypes.string,
}
// Permet de definir une valeur par defaut sans faire buger le typage !
Card.defaultProps = {
  title: 'Mon titre par défaut',
}
