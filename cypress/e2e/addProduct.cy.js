describe('add product test', () => {
  it('add product correct', () => {
    cy.visit('/')
    cy.contains('Products').click()
    cy.contains('Add to cart').click()
    cy.contains('Cart').click()
    cy.get('.cartProductContainer').should('exist')
  })
})