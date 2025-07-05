describe('product price test', () => {
  it('product price correct', () => {
    cy.visit('/')
    cy.contains('Products').click()
    cy.get('.productPriceContainer').each(($el,index, $list) => {
        cy.wrap($el).contains(/^[0-9]*$/)
    })
  })
})