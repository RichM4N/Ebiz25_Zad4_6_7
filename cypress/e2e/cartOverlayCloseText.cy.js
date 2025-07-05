describe('cart overlay close text test', () => {
  it('cart overlay close text correct', () => {
    cy.visit('/')
    cy.contains('Cart').click()
    cy.url().should('include', '/cart')
    cy.contains("Purchase").click()
    cy.get('.paymentContainer').should('be.visible')
    cy.get('.paymentContainer').find('.paymentDecisionBtn:nth-child(2)').contains('No')
  })
})