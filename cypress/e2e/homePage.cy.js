describe('hompeage test', () => {
  it('homepage opens', () => {
    cy.visit('/')
    cy.url().should('eq',"http://localhost:3000/")
  })
})