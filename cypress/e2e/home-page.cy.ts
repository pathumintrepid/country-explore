describe("home page", () => {
  beforeEach(() => {
    cy.clock();
    cy.visit("/");
  });
  it("should contain header", () => {
    cy.getById("main-header").should("contain", "Country Explorer");
  });

  it("should contain footer", () => {
    cy.getById("main-footer").should("contain", "Country Explorer");
  });

  it("should contain home page tagline", () => {
    cy.getById("home-page-tagline").should("contain", "Explore the world");
  });

  it("should contain 10 country list items", () => {
    cy.getById("country-list-item").should("have.length", 10);
  });

  it("should add 10 more items when press the see more button", () => {
    cy.getById("see-more-button").should("be.visible").click().click();

    cy.get('[data-cy="country-list-item"]').should("have.length", 20);
  });
});
