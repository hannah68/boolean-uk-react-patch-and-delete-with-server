import TicketsTable from "./components/TicketsTable"

function TicketsSummary (props) {
  const { tickets } = props

  return (
    <>
      <h3>Tickets Summary</h3>
      <TicketsTable tickets={tickets} />
    </>
  )
}

export default TicketsSummary
