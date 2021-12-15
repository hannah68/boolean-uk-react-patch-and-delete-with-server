import ToursList from "./components/ToursList"

function Dashboard(props) {
  const { tours } = props

  return (
    <main>
      <h1>Dashboard</h1>
      <ToursList tours={tours} />
    </main>
  )
}

export default Dashboard
