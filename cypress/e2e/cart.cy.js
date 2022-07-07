import { CommonPage } from '../PageObjects/common.page';
import loginPage from "../PageObjects/loginPage";

context('Cart', () => {
    beforeEach(() => {
        cy.setSessionStorage('cart-contents', '[4,1,2]')
        cy.visit('/')
        loginPage.TypeUsernamePassword("standard_user","secret_sauce");
        loginPage.ClickLogInBtn();
        loginPage.ClickShoppingCartBtn()
        cy.url().should('match', /cart/)
    })

    describe('Page 2', () => {
        it('visible inventory items', () => {
            CommonPage.CartListItems()
                .should('have.length', 0)

        })
        it('visible main burger menu', () => {
            CommonPage.MainBurgerButton()
                .invoke('text')
                .should('match', /Menu/i)

        })
    })


})