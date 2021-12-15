import { useState } from "react"
import { useNavigate } from "react-router"

function CreateTourPage(props) {
  const { tours, setTours } = props

  const [tourToCreate, setTourToCreate] = useState({
    name: "",
    price: 0,
  })

  console.log({ tourToCreate })

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tourToCreate),
    }

    fetch("http://localhost:3030/tours", fetchOptions)
      .then(res => res.json())
      .then(createdTour => {
        setTours([...tours, createdTour])
        navigate("/admin")
      })
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    setTourToCreate({ ...tourToCreate, [name]: value })
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit}>
      <h2>Create a Tour</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={tourToCreate.name}
      />
      <label htmlFor="price">price</label>
      <input
        type="text"
        id="price"
        name="price"
        onChange={handleChange}
        value={tourToCreate.price}
      />
      <button type="submit">Create Tour</button>
    </form>
  )
}

export default CreateTourPage
