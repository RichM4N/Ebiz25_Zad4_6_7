describe('cart overlay close test', () => {
  it('cart overlay close correct', () => {
    cy.visit('/')
    cy.contains('Cart').click()
    cy.url().should('include', '/cart')
    cy.contains("Purchase").click()
    cy.get('.paymentContainer').should('be.visible')
    cy.get('.paymentContainer').contains("No").click()
    cy.get('.paymentContainer').should('not.exist')
  })
})