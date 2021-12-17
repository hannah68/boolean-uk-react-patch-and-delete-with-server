import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import HomePage from "./components/Home"
import BookTicket from "./components/tickets/BookTicket"
import TicketsList from "./components/tickets/TicketsList"

import { LocalRoutes } from "../../config.js"

function UserRouter (props) {
  const { tours, setTours, tickets, setTickets } = props

  return (
    <>
      <h2>User Pages</h2>
      <nav>
        <ul>
          <li>
            <Link to={LocalRoutes.home}>Home</Link>
          </li>
          <li>
            <Link to={LocalRoutes.tickets}>Tickets</Link>
          </li>
          <li>
            <Link to={LocalRoutes.admin}>Admin Pages</Link>
          </li>
        </ul>
      </nav>

      <main>

        <Routes>
          <Route path={LocalRoutes.home} element={<HomePage tours={tours}/>} />
          <Route
            path={LocalRoutes.toursBookWithId}
            element={<BookTicket tickets={tickets} setTickets={setTickets}/>}
          />
          <Route path={LocalRoutes.tickets} element={<TicketsList tickets={tickets}/>} />
        </Routes>

      </main>
    </>
  )
}

export default UserRouter
