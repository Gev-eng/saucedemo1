// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
    Cypress.Commands.add('getSessionStorage', (key) => {
    cy.window().then((window) => window.sessionStorage.getItem(key))
    })

    Cypress.Commands.add('setSessionStorage', (key, value) => {
    cy.window().then((window) => {
        window.sessionStorage.setItem(key, value)
    })
    })
    Cypress.Commands.add("login",(username,password)=>{
          cy.get("[id=\"user-name\"]").type(username)
          cy.get("[data-test=\"password\"]").type(password)
          cy.get("[id=\"login-button\"]").click()
    })