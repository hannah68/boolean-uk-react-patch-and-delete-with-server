import { useEffect, useState } from "react"
import TicketsTable from "./components/TicketsTable"

function TicketsSummary() {
  const [tickets, setTickets] = useState([])

  console.log({ tickets })

  useEffect(() => {
    fetch("http://localhost:3030/tickets")
      .then(res => res.json())
      .then(data => setTickets(data))
  }, [])

  return (
    <main>
      <h1>Tickets Summary</h1>
      <TicketsTable tickets={tickets} />
    </main>
  )
}

export default TicketsSummary
