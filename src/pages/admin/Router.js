import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import CreateTourPage from "./tours/CreateTour"
import EditTourPage from "./tours/EditTour"
import Dashboard from "./Dashboard"
import TicketsSummary from "./tickets/Summary"

import { LocalRoutes } from "../../config.js"

function AdminRouter() {
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
          <Route path={LocalRoutes.adminHome} element={<Dashboard />} />
          <Route
            path={LocalRoutes.adminToursCreate}
            element={<CreateTourPage />}
          />
          <Route
            path={LocalRoutes.adminToursEditWithId}
            element={<EditTourPage />}
          />
          <Route path={LocalRoutes.adminTicketsSummary} element={<TicketsSummary />} />
        </Routes>

      </main>
    </>
  )
}

export default AdminRouter
