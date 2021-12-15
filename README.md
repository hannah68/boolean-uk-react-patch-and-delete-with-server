# PATCH and DELETE with a Server

In this exercise, you are going to practice using routes alongside `fetch` requests to a server.

## Get Started

1. Fork this repository
2. Clone the forked repository onto your local machines
3. In the root directory, type `npm install`, which installs dependencies for the project
4. Run `json-server` - `npx json-server --watch db/db.json --routes db/routes.json --port 3030`(or just `json-server --watch db/db.json --routes db/routes.json --port 3030`, if you already have `json-server` installed)
5. Finally, type `npm run start`, which starts a development server that runs your website in the browser. That server will reload your website whenever you make any changes to source files

## Instructions

The instructor will demonstarte the following:

- A PATCH request to the "/tours" endpoint in `/admin/tours/EditTour.js`
- A DELETE request to the "/tours" endpoint in `/admin/tours/EditTour.js`

You will implement the above and:

- A PATCH request to the "/tickets" endpoint in `/user/tickets/EditTicket.js`
- A DELETE request to the "/tickets" endpoint in `/user/tickets/EditTicket.js`

## Further Work

Below are some added exercises, should you complete everything above.

### Addresses

- Add an `address` resource to `db.json` that works with `tours`
- Add a form to the `/admin/tours/CreateTour.js` for the address
- Display the address on the lists
- Implement edit functionality with an address
- If a tour is deleted also delete the address

### Attractions

- Add another type of attraction ie. `shows` for Theatre Shows
- Add another route to `/admin/Router.js` for a `CreateShow` form
- Allow users to book tickets to shows
- Implement edit functionality
- Implement delete functionality
