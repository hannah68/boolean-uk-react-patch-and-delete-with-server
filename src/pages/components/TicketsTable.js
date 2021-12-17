import TicketRow from "./TicketRow"

function TicketsTable(props) {
  const { tickets } = props

  return (
    <table>
      <tbody>
        <tr>
          <th>Tour</th>
          <th>Customer Email</th>
          <th>Quantity</th>
          <th>Price per Ticket</th>
          <th>Total</th>
          <th>Ref</th>
        </tr>
        {tickets.map((ticket) => {
          return <TicketRow key={ticket.id} ticket={ticket} />
        })}
      </tbody>
    </table>
  )
}

export default TicketsTable
