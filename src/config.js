export class LocalRoutes {
    static home = "/"
    static admin = "/admin"
    static tickets = "/tickets"
    static tours = "/tours"
    static toursIdBook = `${LocalRoutes.tours}/:id/book`

    static adminHome = LocalRoutes.home
    static adminTours = "tours"
    static adminTickets = "tickets"
    static adminToursCreate = `${LocalRoutes.adminTours}/create`
    static adminToursEdit = `${LocalRoutes.adminTours}/:id/edit`
    static adminTicketsSummary = `${LocalRoutes.adminTickets}/summary`
}

export class APIEndpoints {
    static baseURL = "http://localhost:3030"
    static tours = `${APIEndpoints.baseURL}/tours`
    static tickets = `${APIEndpoints.baseURL}/tickets`
}
