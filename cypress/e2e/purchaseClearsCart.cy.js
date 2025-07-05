describe('purchase clears cart test', () => {
  it('purchase clears cart correctly', () => {
    cy.visit('/')
    cy.contains('Products').click()
    cy.contains('Add to cart').click()
    cy.contains('Cart').click()
    cy.get('.cartProductContainer').should('exist')
    cy.contains("Purchase").click()
    cy.get('.paymentContainer').contains("Yes").click()
    cy.get('.cartProductContainer').should('not.exist')
  })
})