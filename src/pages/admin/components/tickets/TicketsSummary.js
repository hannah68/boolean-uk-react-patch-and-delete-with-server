import { useEffect, useState } from "react"

import TicketsTable from "./components/TicketsTable"
import { fetchData } from "../../../../fetch.js"

import { APIEndpoints } from "../../../../config.js"

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
    <>
      <h3>Tickets Summary</h3>
      <TicketsTable tickets={tickets} />
    </>
  )
}

export default TicketsSummary
