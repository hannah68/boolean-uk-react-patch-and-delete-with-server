import { useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import CreateTourPage from "./tours/CreateTour"
import Dashboard from "./Dashboard"
import TicketsSummary from "./tickets/Summary"
import EditTourPage from "./tours/EditTour"

function AdminRouter() {
  const [tours, setTours] = useState([])

  console.log({ tours })

  useEffect(() => {
    fetch("http://localhost:3030/tours")
      .then(res => res.json())
      .then(data => setTours(data))
  }, [])

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/admin/">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/tours/create">Create a Tour</Link>
            </li>
            <li>
              <Link to="/admin/tickets/summary">Tickets Summary</Link>
            </li>
            <li>
              <Link to="/">User Pages</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard tours={tours} />} />
        <Route
          path="/tours/create"
          element={<CreateTourPage tours={tours} setTours={setTours} />}
        />
        <Route
          path="/tours/:id/edit"
          element={<EditTourPage tours={tours} setTours={setTours} />}
        />
        <Route path="tickets/summary" element={<TicketsSummary />} />
      </Routes>
    </>
  )
}

export default AdminRouter
