import  loginPage from "../PageObjects/loginPage"
import { CommonPage } from '../PageObjects/common.page';

beforeEach('before',() => {
    cy.setSessionStorage('cart-contents', '[]')
    cy.visit('/')
    loginPage.TypeUsernamePassword("standard_user","secret_sauce");
    loginPage.ClickLogInBtn();
    cy.url().should('contain', '/inventory')
})

describe('Simple Form Demo 1', () => {
    it('visible ', () => {
        cy.setSessionStorage('cart-contents', '[]')
        cy.visit('/')
        loginPage.TypeUsernamePassword("standard_user","secret_sauce");
        loginPage.ClickLogInBtn();
        cy.url().should('contain', '/inventory')
        cy.url().should('contain', '/inventory')
    })

    it('visible price, header and description', () => {
        CommonPage.InventoryItems().first().as('inventoryItem')

        cy.get('@inventoryItem').find('.inventory_item_name').invoke('text').its('length').should('be.gt', 1)
        cy.get('@inventoryItem').find('.inventory_item_desc').invoke('text').its('length').should('be.gt', 1)

        cy.get('@inventoryItem').find('.inventory_item_price').should('have.text', '$29.99')

    })
    it('visible main burger menu', () => {
        CommonPage.MainBurgerButton()
            .invoke('text')
            .should('match', /Menu/i)

    })
})


