
export const createBooking = (booking: CreateBooking): Cypress.Chainable<Response> => {
    return cy.getAuthToken().then((bearerToken) => {
        return cy
            .request({
                method: 'POST',
                url: Cypress.env('api_baseUrl') + '/bookings',
                headers: {
                    Authorization: bearerToken,
                },
                body: booking
            })
            .then((response) => {
                if (!response.isOkStatusCode) {
                    console.log('Error on CreateBooking: ', response);
                    throw new Error('Request failed with status code: ' + response.status);
                }
                return response.body;
            });
    });
};