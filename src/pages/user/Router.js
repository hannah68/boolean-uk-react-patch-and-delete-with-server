import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import HomePage from "./Home"
import BookTicket from "./tickets/BookTicket"
import ViewTickets from "./tickets/ViewTickets"

import { LocalRoutes } from "../../config.js"

function UserRouter() {
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
          <Route path={LocalRoutes.home} element={<HomePage />} />
          <Route path={LocalRoutes.toursBookWithId} element={<BookTicket />} />
          <Route path={LocalRoutes.tickets} element={<ViewTickets />} />
        </Routes>

      </main>
    </>
  )
}

export default UserRouter
