import { Link } from "react-router-dom"

function ViewTickets(props) {
  const { tickets } = props

  return (
    <ul>
      {tickets.map((ticket, index) => {
        const { email, quantity, date, tour } = ticket

        return (
          <li key={index}>
            <h3>{tour.name}</h3>
            <p>Email: {email}</p>
            <p>Quantity: {quantity}</p>
            <p>Date: {date}</p>
            <Link to={`/tickets/${ticket.id}/edit`} state={{ ticket }}>
              Edit Ticket
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ViewTickets
