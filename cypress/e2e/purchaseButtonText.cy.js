describe('purchase button text test', () => {
  it('purchase button text correct', () => {
    cy.visit('/')
    cy.contains('Cart').click()
    cy.url().should('include', '/cart')
    cy.get('.cartPurchaseBtn:first').should('have.text', 'Purchase')
  })
})