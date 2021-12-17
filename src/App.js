import { useEffect, useState } from "react"
import { Route, Routes } from "react-router"

import AdminRouter from "./pages/admin/Router"
import UserRouter from "./pages/user/Router"

import { fetchData } from "./fetch.js"

import { LocalRoutes, APIEndpoints } from "./config.js"

import "./styles.css"

function App() {

  const [tours, setTours] = useState([])
  const [tickets, setTickets] = useState([])
  const [data, setData] = useState({
    tours: {
      data: tours,
      setData: setTours
    },
    tickets: {
      data: tickets,
      setData: setTickets
    }
  })

  useEffect(() => {

    const appData = {
      tours: {
        data: tours,
        setData: setTours
      },
      tickets: {
        data: tickets,
        setData: setTickets
      }
    }

    let fetchParams = {
      url: APIEndpoints.tours,
      cb: tourData => {
        appData.tours.data = tourData

        fetchParams = {
          url: APIEndpoints.tickets,
          cb: ticketData => {
            appData.tickets.data = ticketData
            setData(appData)
          }
        }

        fetchData(fetchParams)
      }
    }
    fetchData(fetchParams)

  }, [])

  return (
    <>
      <h1>Tour Manager</h1>
      <Routes>
        <Route path={`${LocalRoutes.home}*`} element={<UserRouter data={data} setData={setData}/>} />
        <Route path={`${LocalRoutes.admin}/*`} element={<AdminRouter data={data} setData={setData}/>} />
      </Routes>
    </>
  )
}

export default App
