describe('products page test', () => {
  it('products page opens', () => {
    cy.visit('/')
    cy.contains('Products').click()
    cy.url().should('include', '/products')
  })
})