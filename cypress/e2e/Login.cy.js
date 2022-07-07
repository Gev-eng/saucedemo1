import  loginPage from "../PageObjects/loginPage"

describe('Simple Form Demo', () => {

    beforeEach('successfully loads', () => {
        cy.visit('/')
        cy.url().should('match', /saucedemo/)
    })
    it('Verify that valid user can sign in with login command', () => {
        cy.login("standard_user","secret_sauce")
        cy.url().should('contain', '/inventory')

    })

    it('Verify that 1st valid user can sign in', () => {
        loginPage.TypeUsernamePassword("standard_user","secret_sauce");
        loginPage.ClickLogInBtn();
        cy.url().should('contain', '/inventory')
    })

    it('Verify that 2nd valid user can sign in', () => {
        loginPage.TypeUsernamePassword("locked_out_user","secret_sauce");
        loginPage.ClickLogInBtn();
        cy.url().should('not.contain', '/inventory')
    })

    it('Verify that 3rd valid user can sign in', () => {
        loginPage.TypeUsernamePassword("problem_user","secret_sauce");
        loginPage.ClickLogInBtn();
        cy.url().should('contain', '/inventory')
    })

    it('Verify that 4th valid user can sign in', () => {
        loginPage.TypeUsernamePassword("performance_glitch_user","secret_sauce");
        loginPage.ClickLogInBtn();
        cy.url().should('contain', '/inventory')
    })
    it('Verify that invalid user can not sign in', () => {
        loginPage.TypeUsernamePassword("performance","secret_sauce");
        loginPage.ClickLogInBtn();
        cy.url().should('not.contain', '/inventory')
    })
})