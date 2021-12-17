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
      <header>
        <nav>
          <ul>
            <li>
              <Link to={LocalRoutes.adminHome}>Home</Link>
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
      </header>
      <Routes>
        <Route path={LocalRoutes.adminHome} element={<Dashboard />} />
        <Route
          path={LocalRoutes.adminToursCreate}
          element={<CreateTourPage />}
        />
        <Route
          path={LocalRoutes.adminToursEdit}
          element={<EditTourPage />}
        />
        <Route path={LocalRoutes.adminTicketsSummary} element={<TicketsSummary />} />
      </Routes>
    </>
  )
}

export default AdminRouter
