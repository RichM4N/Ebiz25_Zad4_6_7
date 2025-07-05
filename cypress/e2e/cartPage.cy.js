describe('cart page test', () => {
  it('cart page opens', () => {
    cy.visit('/')
    cy.contains('Cart').click()
    cy.url().should('include', '/cart')
  })
})