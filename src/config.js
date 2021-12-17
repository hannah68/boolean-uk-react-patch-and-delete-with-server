export class LocalRoutes {
    static home = "/"
    static admin = "/admin"
    static tickets = "/tickets"
    static tours = "/tours"
    static toursBook = `${LocalRoutes.tours}/book`
    static toursBookWithId = `${LocalRoutes.toursBook}/:id`

    static adminHome = "/"
    static adminTours = "tours"
    static adminTickets = "tickets"
    static adminToursCreate = `${LocalRoutes.adminTours}/create`
    static adminToursEdit = `${LocalRoutes.adminTours}/edit`
    static adminToursEditWithId = `${LocalRoutes.adminToursEdit}/:id`
    static adminTicketsSummary = `${LocalRoutes.adminTickets}/summary`
}

export class APIEndpoints {
    static baseURL = "http://localhost:3030"
    static tours = `${APIEndpoints.baseURL}/tours`
    static tickets = `${APIEndpoints.baseURL}/tickets`
}

export class UIText {

  static title = "Tour Manager"
  static userHome = "User Home"
  static dashboard = "Dashboard"
  static createTour = "Create Tour"
  static tickets = "Tickets"

  static home = "Home"
  static adminPages = "Admin Pages"

  static bookTickets = "Book Tickets"
  static ticketQuantity = "Quantity"
  static ticketDate = "Date"
  static ticketEmail = "Email"
  static ticketPrice = "Price per Ticket"
  static orderTotal = "Total"
  static orderReference = "Ref"
  static cancel = "Cancel"

  static availableTours = "Available Tours"
  static tour = 'Tour'

  static editDeleteTour = "Edit/Delete Tour"
  static editTour = "Edit Tour"
  static deleteTour = "Delete Tour"

  static tourPrice = "Price"
  static tourName = "Name"

}
