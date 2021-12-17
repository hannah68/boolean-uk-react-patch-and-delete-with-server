import { Link } from "react-router-dom"

import { UIText } from "../../config.js"

function ToursList (props) {
  const { tours, path, pathText } = props

  return (
    <>
      <h3>{UIText.availableTours}</h3>
      <ul>
        {tours.map((tour) => {
          const { name, price } = tour

          return (
            <li key={tour.id}>
              <h3>{name}</h3>
              <p>{UIText.tourPrice}: £{price}</p>
              <Link to={`${path}/${tour.id}`} state={{ tour }}>
                {pathText}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ToursList
