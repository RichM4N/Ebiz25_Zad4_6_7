describe('add product button color test', () => {
  it('add product button color correct', () => {
    cy.visit('/')
    cy.contains('Products').click()
    cy.url().should('include', '/products')
    cy.get('.productAddToCartBtn:first').should('have.css', 'background-color', 'rgb(249, 249, 249)')
  })
})