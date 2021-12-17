import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { fetchData } from "../../../../fetch.js"

import { LocalRoutes, APIEndpoints } from "../../../../config.js"

function BookTicket (props) {
  const { tickets, setTickets } = props

  const [ticketToCreate, setTicketToCreate] = useState({
    tourId: null,
    email: "",
    quantity: 0,
    date: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  // console.log({ location })

  useEffect(() => {

    if ( submitted ) {

      let fetchOptions = {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(ticketToCreate)
      }

      const fetchDataParams = {
        url: APIEndpoints.tickets,
        options: fetchOptions,
        cb: bookedTicket => {
          const { tour } = location.state
          const myTicket = {
            id: bookedTicket.id,
            tourId: ticketToCreate.tourId,
            email: ticketToCreate.email,
            quantity: ticketToCreate.quantity,
            date: ticketToCreate.date,
            tour: {
                id: tour.id,
                name: tour.name,
                price: tour.price
            }
          }
          //console.log('book', ticketToCreate)
          setTickets([...tickets, myTicket])
          navigate(LocalRoutes.tickets)
        }
      }

      fetchData(fetchDataParams)
      setSubmitted(false);
    }

  }, [ticketToCreate, navigate, submitted])

  function handleSubmit(event) {
    event.preventDefault()

    if (location.state) {
      const { tour } = location.state
      console.log('blahdsaf', tour)
      setTicketToCreate({
        ...ticketToCreate,
        tourId: tour.id
      })
      setSubmitted(true)
    }
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    setTicketToCreate({ ...ticketToCreate, [name]: value })
  }

  return (
    <>
      <h2>Book Tickets</h2>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={ticketToCreate.email}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          onChange={handleChange}
          value={ticketToCreate.quantity}
        />
        <label htmlFor="date">Date</label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          onChange={handleChange}
          value={ticketToCreate.date}
        />
        <button type="submit">Book Ticket</button>
        <Link to="/">Cancel</Link>
      </form>
    </>
  )
}

export default BookTicket
