import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import HomePage from "./components/Home"
import BookTicket from "./components/tickets/BookTicket"
import TicketsList from "../components/TicketsList"

import { LocalRoutes, UIText } from "../../config.js"

function UserRouter (props) {
  const { tours, tickets, setTickets } = props

  return (
    <>
      <h2>{UIText.userPages}</h2>
      <nav>
        <ul>
          <li>
            <Link to={LocalRoutes.home}>{UIText.home}</Link>
          </li>
          <li>
            <Link to={LocalRoutes.tickets}>{UIText.tickets}</Link>
          </li>
          <li>
            <Link to={LocalRoutes.admin}>{UIText.adminPages}</Link>
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
          <Route
            path={LocalRoutes.tickets}
            element={
              <TicketsList
                tickets={tickets}
                isSummary={false}
              />
            }
          />
        </Routes>

      </main>
    </>
  )
}

export default UserRouter
