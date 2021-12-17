import { useEffect, useState } from "react"

import TicketsTable from "./components/TicketsTable"
import { fetchData } from "../../../fetch.js"

import { APIEndpoints } from "../../../config.js"

function TicketsSummary() {
  const [tickets, setTickets] = useState([])

  // console.log('my tickets', { tickets })

  const setData = data => setTickets(data)

  useEffect(() => {

    const fetchParams = {
      url: APIEndpoints.tickets,
      cb: setData
    }
    fetchData(fetchParams)

  }, [])

  return (
    <main>
      <h1>Tickets Summary</h1>
      <TicketsTable tickets={tickets} />
    </main>
  )
}

export default TicketsSummary
