import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ToursList() {
  const [tours, setTours] = useState([])

  console.log({ tours })

  useEffect(() => {
    fetch("http://localhost:3030/tours")
      .then(res => res.json())
      .then(data => setTours(data))
  }, [])

  return (
    <ul>
      {tours.map((tour, index) => {
        const { name, price } = tour

        return (
          <li key={index}>
            <h3>{name}</h3>
            <p>Price: £{price}</p>
            <Link to={`/tours/${tour.id}/book`} state={{ tour }}>
              Book Tour
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ToursList
