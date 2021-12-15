import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import HomePage from "./Home"
import BookTicket from "./tickets/BookTicket"
import ViewTickets from "./tickets/ViewTickets"

import { LocalRoutes } from "../../config.js"

function UserRouter() {
  return (
    <>
      <header>
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
      </header>

      <Routes>
        <Route path={LocalRoutes.home} element={<HomePage />} />
        <Route path={LocalRoutes.toursIdBook} element={<BookTicket />} />
        <Route path={LocalRoutes.tickets} element={<ViewTickets />} />
      </Routes>
    </>
  )
}

export default UserRouter
