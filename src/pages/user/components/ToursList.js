import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { fetchData } from "../../../fetch.js"

import { LocalRoutes, APIEndpoints } from "../../../config.js"

function ToursList() {
  const [tours, setTours] = useState([])

  // console.log('in tourslist', { tours })
  const setData = data => setTours(data)

  useEffect(() => {

    const fetchParams = {
      url: APIEndpoints.tours,
      cb: setData
    }
    fetchData(fetchParams)

  }, [])

  return (
    <>
      <h2>Available Tours</h2>
      <ul>
        {tours.map((tour, index) => {
          const { name, price } = tour

          return (
            <li key={index}>
              <h3>{name}</h3>
              <p>Price: £{price}</p>
              <Link to={`${LocalRoutes.tours}/${tour.id}/book`} state={{ tour }}>
                Book Tour
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ToursList
