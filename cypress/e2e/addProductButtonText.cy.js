describe('add product button text test', () => {
  it('add product button text correct', () => {
    cy.visit('/')
    cy.contains('Products').click()
    cy.url().should('include', '/products')
    cy.get('.productAddToCartBtn:first').should('have.text', 'Add to cart')
  })
})