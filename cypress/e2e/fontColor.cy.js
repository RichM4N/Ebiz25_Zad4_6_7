describe('font color test', () => {
  it('font color correct', () => {
    cy.visit('/')
    cy.get('#root').should('have.css', 'color', 'rgb(33, 53, 71)')
  })
})