import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"

function EditTourPage(props) {
  const { tours, setTours } = props
  const [isEdited, setIsEdited] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
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
  }, [location]);

  useEffect(() => {
    const tourId = location.state.tour.id;

    if(isDeleted && location.state){
      fetch(`http://localhost:3030/tours/${tourId}`, {
        method: 'Delete'
      })
      .then(res => res.json())
      .then(data => {
        const updatedTour = tours.filter(tour => {
          return tour.id !== tourId
        })
        console.log(updatedTour);
        setTours(updatedTour);
        navigate('/admin');
      })
      setIsDeleted(false);
    }
  }, [tours, setTours, location.state, isDeleted])


  useEffect(() => {
    const tour = {
      name: tourToEdit.name ? tourToEdit.name : location.state.tour.name,
      price: tourToEdit.price ? tourToEdit.price : location.state.tour.price
    }
    const tourId = location.state.tour.id;

    if(location.state && isEdited){
      fetch(`http://localhost:3030/tours/${tourId}`,{
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tour)
      })
      .then(res => res.json())
      .then(data => {
        const updatedTour = tours.map(tour => {
          if(tour.id === data.id){
            return data
          }
          return tour
        })
        console.log(updatedTour);
        setTours(updatedTour)
        navigate('/admin');
      })
      setIsEdited(false);
    }
  }, [tourToEdit, navigate, location.state,tours, setTours, isEdited]);

  

  function handleSubmit(event) {
    event.preventDefault();
    setIsEdited(true);
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setTourToEdit({ ...tourToEdit, [name]: value })
  }

  function handleDelete() {
    setIsDeleted(true);
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
      <button type="button" onClick={handleDelete}>
        Delete Tour
      </button>
    </form>
  )
}

export default EditTourPage
