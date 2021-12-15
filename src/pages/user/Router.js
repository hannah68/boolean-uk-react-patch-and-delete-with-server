import { useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import HomePage from "./Home"
import BookTicket from "./tickets/BookTicket"
import EditTicket from "./tickets/EditTicket"
import ViewTickets from "./tickets/ViewTickets"

function UserRouter() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch("http://localhost:3030/tickets")
      .then(res => res.json())
      .then(data => setTickets(data))
  }, [])

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
            <li>
              <Link to="/admin">Admin Pages</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours/:id/book" element={<BookTicket />} />
        <Route
          path="/tickets"
          element={<ViewTickets tickets={tickets} />}
        />
        <Route
          path="/tickets/:id/edit"
          element={
            <EditTicket tickets={tickets} setTickets={setTickets} />
          }
        />
      </Routes>
    </>
  )
}

export default UserRouter
