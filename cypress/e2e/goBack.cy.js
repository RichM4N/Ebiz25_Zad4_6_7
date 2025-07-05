describe('go back test', () => {
  it('go back works', () => {
    cy.visit('/')
    cy.url().should('eq',"http://localhost:3000/")
    cy.contains('Cart').click()
    cy.url().should('include', '/cart')
    cy.go('back')
    cy.url().should('eq',"http://localhost:3000/")
  })
})