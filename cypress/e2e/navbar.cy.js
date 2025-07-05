describe('navbar links set test', () => {
  it('navbar links set', () => {
    cy.visit('/')
    cy.contains('Home')
    cy.contains('Cart')
    cy.contains('Products')
  })
})