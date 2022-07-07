
// Cypress.Commands.add('login', (username, password) => {
//     cy.visit('/login')
//     cy.get('[id="user-name"]').type(username)
//     cy.get('[id="login-button"]').type(password)
//     cy.get('[id="login-button"]').click()
//     cy.url().should('contain', '/inventory')
// })
class loginPage{
    elements = {
        Username:()=>cy.get("[id=\"user-name\"]"),
        Password:()=>cy.get("[data-test=\"password\"]"),
        LogInBtn:()=>cy.get("[id=\"login-button\"]"),
        cart:()=>cy.get(".shopping_cart_link")
    }

    TypeUsernamePassword(username,password){
        this.elements.Username().type(username)
        this.elements.Password().type(password)

    }
    ClickLogInBtn(){
        this.elements.LogInBtn().click()
    }
    ClickShoppingCartBtn(){
        this.elements.cart().click()
    }

}
module.exports = new loginPage()