describe('cart overlay open test', () => {
  it('cart overlay opens correct', () => {
    cy.visit('/')
    cy.contains('Cart').click()
    cy.url().should('include', '/cart')
    cy.contains("Purchase").click()
    cy.get('.paymentContainer').should('be.visible')
  })
})