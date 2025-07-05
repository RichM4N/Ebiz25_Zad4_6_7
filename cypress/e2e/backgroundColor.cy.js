describe('color scheme test', () => {
  it('color scheme correct', () => {
    cy.visit('/')
    cy.get('#root').should('have.css', 'color-scheme', 'light dark')
  })
})