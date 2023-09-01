declare namespace Cypress {
    interface Chainable {
      getAuthToken(): Chainable<string>;
    }
}

Cypress.Commands.add("getAuthToken", () => {
    cy.request({
      method: "POST",
      url: "https://api.booking.com/auth/token", // Replace with your authentication endpoint
      body: {
        username: "your_username",
        password: "your_password",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("token").and.not.to.be.empty;
      cy.wrap(response.body.token).as("authToken"); // Store the token as a Cypress alias
    });
  });