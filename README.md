# GET and POST with a Server

## Get Started

`npx json-server --watch db/db.json --routes db/routes.json --port 3030`

## Instructions

The instructor will demonstarte the following:

- How to setup and start `json-server`
- A GET request to the "/tours" endpoint in `/admin/Router.js`
- A POST request to the "/tours" endpoint in `/admin/tours/CreateTour.js`

You will implement the above and:

- A GET request to the "/tickets" endpoint in `/admin/tickets/Summary.js`
- A GET request to the "/tours" endpoint in `/user/components/ToursList`
- A POST request to the "/tickets" endpoint in `/user/tickets/BookTicket.js`
- A GET request to the "/tickets" endpoint in `/user/tickets/ViewTickets.js`

## Further Work

### Addresses

- Add an `address` resource to `db.json` that works with `tours`
- Add a form to the `/admin/tours/CreateTour.js` for the address
- Display the address on the lists

### Attractions

- Add another type of attraction ie. `shows` for Theatre Shows
- Add another route to `/admin/Router.js` for a `CreateShow` form
- Allow users to book tickets to shows
