import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import HomePage from "./components/Home"
import BookTicket from "./components/tickets/BookTicket"
import TicketsList from "./components/tickets/TicketsList"

import { LocalRoutes } from "../../config.js"

function UserRouter (props) {
  const { data } = props
  const { tours, tickets } = data

  //console.log('User router', data, tours, tickets)

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
          <Route path={LocalRoutes.home} element={<HomePage tours={tours.data}/>} />
          <Route
            path={LocalRoutes.toursBookWithId}
            element={<BookTicket tickets={tickets.data} setTickets={tickets.setData}/>}
          />
          <Route path={LocalRoutes.tickets} element={<TicketsList tickets={tickets.data}/>} />
        </Routes>

      </main>
    </>
  )
}

export default UserRouter
