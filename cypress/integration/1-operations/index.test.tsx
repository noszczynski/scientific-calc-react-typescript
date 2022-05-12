// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("Operation - Numbers", () => {
  it("should be correct", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=0]").click();
    cy.get("[data-cy=1]").click();
    cy.get("[data-cy=2]").click();
    cy.get("[data-cy=3]").click();
    cy.get("[data-cy=4]").click();
    cy.get("[data-cy=5]").click();
    cy.get("[data-cy=6]").click();
    cy.get("[data-cy=7]").click();
    cy.get("[data-cy=8]").click();
    cy.get("[data-cy=9]").click();
    cy.get("[data-cy=0]").click();
    cy.get("[data-cy=display]").should("have.text", "1234567890");
  });
});

describe("Operation - Clear", () => {
  it("should be correct", () => {
    cy.visit("http://localhost:3000");
    cy.contains("1").click();
    cy.contains("2").click();
    cy.contains("CE").click();
    cy.get("[data-cy=display]").should("have.text", "0");
  });
});
