describe("country details page", () => {
  it("should be able to visit a country details page from home page", () => {
    cy.visit("/");
    cy.getById("country-list-item").first().click();
    cy.location("pathname").should("eq", "/country/Afghanistan");
  });

  it("should contain country details", () => {
    cy.visit("/country/Afghanistan");

    cy.getById("calling-code").should("contain", "93");
    cy.getById("capital").should("contain", "Kabul");
    cy.getById("currencies").should("contain", "AFN");
    cy.getById("region").should("contain", "Asia");
    cy.getById("population").should("contain", "2837743");
    cy.getById("coordinates").should("contain", "33,65");
    cy.getById("area").should("contain", "652230");
    cy.getById("languages").should("contain", "Dari, Pashto, Turkmen");

    cy.getById("name").should("contain", "Afghanistan");
    cy.getById("official_name").should(
      "contain",
      "Islamic Republic of Afghanistan"
    );

    cy.get("img")
      .should("have.attr", "src")
      .should("include", "https://flagcdn.com/256x192/af.png");
  });
});
