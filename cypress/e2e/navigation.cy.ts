describe("navigation", () => {
  beforeEach(() => {
    cy.clock();
    cy.visit("/country/Afghanistan");
  });
  it("should navigate to the country details page", () => {
    cy.location("pathname").should("eq", "/country/Afghanistan");
  });
  it("should navigate back to the home page using back to countries button", () => {
    cy.get("[data-cy='back-to-countries-button']").should("be.visible").click();
    cy.location("pathname").should("eq", "/");
  });
});
