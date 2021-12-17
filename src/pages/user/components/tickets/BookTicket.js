import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { fetchData } from "../../../../fetch.js"

import { LocalRoutes, APIEndpoints, UIText } from "../../../../config.js"

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

    if ( submitted && location.state ) {

      const { tour } = location.state
      ticketToCreate.tourId = tour.id

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

          // this creates a ticket in its cached form, for display
          const myTicket = {
            ...ticketToCreate,
            id: bookedTicket.id,
            tour: {
                id: tour.id,
                name: tour.name,
                price: tour.price
            }
          }

          setTickets([...tickets, myTicket])
          navigate(LocalRoutes.tickets)
        }
      }

      fetchData(fetchDataParams)
      setSubmitted(false);
    }

  }, [location.state, tickets, setTickets, ticketToCreate, navigate, submitted])

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    setTicketToCreate({ ...ticketToCreate, [name]: value })
  }

  return (
    <>
      <h2>{UIText.bookTickets}</h2>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor={UIText.ticketEmail}>{UIText.ticketEmail}</label>
        <input
          type="email"
          id={UIText.ticketEmail}
          name={UIText.ticketEmail}
          onChange={handleChange}
          value={ticketToCreate.email}
        />
        <label htmlFor={UIText.ticketQuantity}>{UIText.ticketQuantity}</label>
        <input
          type="text"
          id={UIText.ticketQuantity}
          name={UIText.ticketQuantity}
          onChange={handleChange}
          value={ticketToCreate.quantity}
        />
        <label htmlFor="date">{UIText.ticketDate}</label>
        <input
          type="datetime-local"
          id={UIText.ticketDate}
          name={UIText.ticketDate}
          onChange={handleChange}
          value={ticketToCreate.date}
        />
        <button type="submit">{UIText.bookTickets}</button>
        <button onClick={() => navigate(LocalRoutes.home)}>{UIText.cancel}</button>
      </form>
    </>
  )
}

export default BookTicket
