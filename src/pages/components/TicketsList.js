import TicketsTable from './TicketsTable'

function TicketsList (props) {
  const { tickets, isSummary } = props

  return (
    <>
      <h3>Tickets</h3>
      { isSummary ? (
        <TicketsTable tickets={tickets} />
      ): (

        <ul>
          {tickets.map((ticket) => {
            const { email, quantity, date, tour, id } = ticket

            return (
              <li key={id}>
                <h3>{tour.name}</h3>
                <p>Email: {email}</p>
                <p>Quantity: {quantity}</p>
                <p>Date: {date}</p>
                <p>Ref: {id}</p>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default TicketsList
