describe('font test', () => {
  it('font correct', () => {
    cy.visit('/')
    cy.get('#root').should('have.css', 'font-family', 'system-ui, Avenir, Helvetica, Arial, sans-serif')
  })
})