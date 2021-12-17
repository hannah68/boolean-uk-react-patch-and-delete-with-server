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
