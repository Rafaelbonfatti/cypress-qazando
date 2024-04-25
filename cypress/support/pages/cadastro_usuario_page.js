/// <reference types='cypress'/>

export default {
    
    clickRegister() {
        cy.get('#btnRegister')
            .click()
    },


    validateMessageError(menssage) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', menssage)
    },


    filllName(name) {
        cy.get('#user')
            .type(name)
    },

    fillEmail(email) {
        cy.get('#email')
            .type(email)
    },

    fillPassword(password) {
        cy.get('#password')
        .type(password)
    },

    checkRegistrationCompleted(name) {
        cy.get('.swal2-title')
        .should('have.text', 'Cadastro realizado!')

        cy.get('.swal2-html-container')
        .should('have.text', "Bem-vindo " + name)



    }


}