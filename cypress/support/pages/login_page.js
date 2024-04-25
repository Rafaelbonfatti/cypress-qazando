/// <reference types='cypress'/>

export default {
  clickButtonLogin() {
    cy.get("#btnLogin").click();
  },

  validErrorMessage(message) {
    cy.get(".invalid_input").should("be.visible").should("have.text", message);
  },

  fillEmail(email) {
    cy.get("#user").type(email);
  },

  fillPassword(password) {
    cy.get("#password").type(password);
  },

  validateMessageSuccess(email) {
    cy.get("#swal2-title").should("have.text", "Login realizado");

    cy.get(".swal2-html-container")
      .should("be.visible")
      .should("have.text", `Olá, ${email}`);
  },

  clickCheckButton() {
    cy.get("#materialUnchecked").check();
  },
};
