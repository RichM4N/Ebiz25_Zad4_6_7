describe('cart overlay confirm text test', () => {
  it('cart overlay confirm text correct', () => {
    cy.visit('/')
    cy.contains('Cart').click()
    cy.url().should('include', '/cart')
    cy.contains("Purchase").click()
    cy.get('.paymentContainer').find('.paymentDecisionBtn:nth-child(1)').contains('Yes')
  })
})