describe('remove product test', () => {
  it('remove product correct', () => {
    cy.visit('/')
    cy.contains('Products').click()
    cy.contains('Add to cart').click()
    cy.contains('Cart').click()
    cy.get('.cartProductContainer').should('exist')
    cy.contains('X').click({ multiple: true })
    cy.get('.cartProductContainer').should('not.exist')
  })
})