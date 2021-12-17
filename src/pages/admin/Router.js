import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import Dashboard from "./components/Dashboard"
import CreateTourPage from "./components/tours/CreateTour"
import EditTourPage from "./components/tours/EditTour"
import TicketsList from "../components/TicketsList"

import { LocalRoutes } from "../../config.js"

function AdminRouter (props) {
  const { tours, setTours, tickets } = props

  return (
    <>
      <h2>Admin Pages</h2>
      <nav>
        <ul>
          <li>
            <Link to={LocalRoutes.home}>User Home</Link>
          </li>
          <li>
            <Link to={LocalRoutes.admin}>Admin Dashboard</Link>
          </li>
          <li>
            <Link to={LocalRoutes.adminToursCreate}>Create a Tour</Link>
          </li>
          <li>
            <Link to={LocalRoutes.adminTicketsSummary}>Tickets Summary</Link>
          </li>
        </ul>
      </nav>

      <main>

        <Routes>
          <Route path={LocalRoutes.adminHome} element={<Dashboard tours={tours} />} />
          <Route
            path={LocalRoutes.adminToursCreate}
            element={<CreateTourPage tours={tours} setTours={setTours} />}
          />
          <Route
            path={LocalRoutes.adminToursEditWithId}
            element={<EditTourPage tours={tours} setTours={setTours} />}
          />
          <Route
            path={LocalRoutes.adminTicketsSummary}
            element={
              <TicketsList
                tickets={tickets}
                isSummary={true}
              />
            }
          />
        </Routes>

      </main>
    </>
  )
}

export default AdminRouter
