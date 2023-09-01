import { CREATE_BOOKING } from "../support/constants";
import { createBooking } from "../support/services/booking/booking-service";

describe("Booking.com API Tests", () => {
  it("Make a successful booking reservation", () => {
    cy.fixture(CREATE_BOOKING).then((bookingData) => {
      createBooking(bookingData.validBookingData).then((response) => {

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property("bookingId").and.not.to.be.empty;
        expect(response.body)
          .to.have.property("confirmationCode")
          .and.to.match(/^\w{8}$/);
        expect(response.body)
          .to.have.property("totalPrice")
          .and.to.be.a("number")
          .greaterThan(0);

      });
    });
  });

  it("Attempt to book a hotel with invalid guest count", () => {
    cy.fixture(CREATE_BOOKING).then((bookingData) => {
      createBooking(bookingData.).then((response) => {

        expect(response.status).to.equal(400);
        expect(response.body)
          .to.have.property("errorCode")
          .and.to.equal("INVALID_GUEST_COUNT");
      });
      
    });
  });
});
