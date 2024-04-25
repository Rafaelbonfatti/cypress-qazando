/// <reference types='cypress'/>

export default {
    
    accessUserRegistration() {
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-lock')
            .click() 
    }, 

    accessUserLogin() {
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-user')
            .click()
    }


}