import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { Link } from "react-router-dom"

function EditTicket(props) {
  const { tickets, setTickets } = props

  const [ticketToEdit, setTicketToEdit] = useState({
    tourId: null,
    email: "",
    quantity: 0,
    date: "",
  })

  const location = useLocation()
  const navigate = useNavigate()

  console.log({ ticketToEdit, location })

  useEffect(() => {
    if (location.state) {
      const { ticket } = location.state

      setTicketToEdit(ticket)
    }
  }, [location])

  function handleSubmit(event) {
    event.preventDefault()

    const fetchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketToEdit),
    }

    fetch(`http://localhost:3030/tickets/${ticketToEdit.id}`, fetchOptions)
      .then(res => res.json())
      .then(updatedTicket => {
        const updatedTickets = tickets.map(ticket => {
          if (ticket.id === updatedTicket.id) {
            return updatedTicket
          }

          return ticket
        })

        setTickets(updatedTickets)

        navigate("/tickets")
      })
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    setTicketToEdit({ ...ticketToEdit, [name]: value })
  }

  function handleDelete(targetTicket) {
    fetch(`http://localhost:3030/tickets/${targetTicket.id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => {
        const updatedTickets = tickets.filter(
          ticket => ticket.id !== targetTicket.id
        )

        setTickets(updatedTickets)
        navigate("/tickets")
      })
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={ticketToEdit.email}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        onChange={handleChange}
        value={ticketToEdit.quantity}
      />
      <label htmlFor="date">Date</label>
      <input
        type="datetime-local"
        id="date"
        name="date"
        onChange={handleChange}
        value={ticketToEdit.date}
      />
      <button type="submit">Edit Ticket</button>
      <button type="button" onClick={() => handleDelete(ticketToEdit)}>
        Delete Ticket
      </button>
      <Link to="/">Cancel</Link>
    </form>
  )
}

export default EditTicket
