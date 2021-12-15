import { useState } from "react"
import TicketsTable from "./components/TicketsTable"

function TicketsSummary() {
  const [tickets, setTickets] = useState([])

  console.log({ tickets })

  return (
    <main>
      <h1>Tickets Summary</h1>
      <TicketsTable tickets={tickets} />
    </main>
  )
}

export default TicketsSummary
