import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { Link } from "react-router-dom"

function BookTicket() {
  const [tour, setTour] = useState(null)
  const [ticketToCreate, setTicketToCreate] = useState({
    tourId: null,
    email: "",
    quantity: 0,
    date: "",
  })

  const location = useLocation()
  const navigate = useNavigate()

  console.log({ location })

  useEffect(() => {
    if (location.state) {
      const { tour } = location.state

      setTour(tour)
    }
  }, [location])

  function handleSubmit(event) {
    event.preventDefault()

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...ticketToCreate, tourId: tour.id }),
    }

    fetch("http://localhost:3030/tickets", fetchOptions)
      .then(res => res.json())
      .then(createdTicket => {
        navigate("/tickets")
      })
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    setTicketToCreate({ ...ticketToCreate, [name]: value })
  }

  return (
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
        value={ticketToCreate.email}
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
  )
}

export default BookTicket
