import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"

function EditTourPage(props) {
  const { tours, setTours } = props

  const [tourToEdit, setTourToEdit] = useState({
    name: "",
    price: 0,
  })

  console.log({ tourToEdit })

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state) {
      const { tour } = location.state

      setTourToEdit(tour)
    }
  }, [location])

  function handleSubmit(event) {
    event.preventDefault()

    const fetchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tourToEdit),
    }

    fetch(`http://localhost:3030/tours/${tourToEdit.id}`, fetchOptions)
      .then(res => res.json())
      .then(updatedTour => {
        const updatedTours = tours.map(tour => {
          if (tour.id === updatedTour.id) {
            return updatedTour
          }

          return tour
        })

        setTours(updatedTours)
        navigate("/admin")
      })
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    setTourToEdit({ ...tourToEdit, [name]: value })
  }

  function handleDelete(targetTour) {
    fetch(`http://localhost:3030/tours/${targetTour.id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => {
        const updatedTours = tours.filter(
          tour => tour.id !== targetTour.id
        )

        setTours(updatedTours)
        navigate("/admin")
      })
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit}>
      <h2>Edit a Tour</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={tourToEdit.name}
      />
      <label htmlFor="price">price</label>
      <input
        type="text"
        id="price"
        name="price"
        onChange={handleChange}
        value={tourToEdit.price}
      />
      <button type="submit">Edit Tour</button>
      <button type="button" onClick={() => handleDelete(tourToEdit)}>
        Delete Tour
      </button>
    </form>
  )
}

export default EditTourPage
