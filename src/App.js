import { useEffect, useState } from "react"
import { Route, Routes } from "react-router"

import AdminRouter from "./pages/admin/Router"
import UserRouter from "./pages/user/Router"

import { fetchData } from "./fetch.js"

import { LocalRoutes, APIEndpoints, UIText } from "./config.js"

import "./styles.css"

function App() {

  const [tours, setTours] = useState([])
  const [tickets, setTickets] = useState([])

  useEffect(() => {

    let fetchParams = {
      url: APIEndpoints.tours,
      cb: tourData => setTours(tourData)
    }
    fetchData(fetchParams)

    fetchParams = {
      url: APIEndpoints.tickets,
      cb: ticketData => setTickets(ticketData)
    }
    fetchData(fetchParams)

  }, [])

  return (
    <>
      <h1>{UIText.title}</h1>
      <Routes>
        <Route
          path={`${LocalRoutes.home}*`}
          element={
            <UserRouter
              tours={tours}
              setTours={setTours}
              tickets={tickets}
              setTickets={setTickets}
            />
          }
        />
        <Route
          path={`${LocalRoutes.admin}/*`}
          element={
            <AdminRouter
              tours={tours}
              setTours={setTours}
              tickets={tickets}
              setTickets={setTickets}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
