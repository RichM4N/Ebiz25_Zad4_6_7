describe('cart overlay text test', () => {
  it('cart overlay text correct', () => {
    cy.visit('/')
    cy.contains('Cart').click()
    cy.url().should('include', '/cart')
    cy.contains("Purchase").click()
    cy.get('.paymentContainer').contains("Confirm total payment of")
  })
})