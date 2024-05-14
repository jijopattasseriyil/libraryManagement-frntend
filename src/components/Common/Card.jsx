import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cardStyle from './Card.module.css'
import { faBook } from '@fortawesome/free-solid-svg-icons'


const Card = ({count ,cardCategory,iconType}) => {
  return (
    <div className={cardStyle.card}>
    <div className="d-flex align-items-center justify-content-between px-3 py-1">
      <h4>{count || 0}</h4>
      <div className={cardStyle.cardAns}>
        <FontAwesomeIcon icon={iconType} />
      </div>
    </div>
    <p className="mt-4 ms-3">{cardCategory}</p>
  </div>
  )
}

export default Card
