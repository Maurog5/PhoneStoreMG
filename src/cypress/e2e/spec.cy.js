describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/welcome')
    cy.get('[class="landing__button"]').click()
    cy.get('.search-input').click();
    cy.get('.search-input').type('arg');
    cy.get('.search-button').click();
    cy.wait(2000)
    cy.get('.heart-button:nth-child(3)').click();
    cy.wait(2000)
    cy.get('.close-button').click()
    cy.visit('http://localhost:4200/create')
   
cy.get('#name').click();
cy.get('#name').type('prueba');
cy.get('#capital').click();
cy.get('#capital').type('san luis ');
cy.get('#population').click();
cy.get('#population').type('1');
cy.wait(5000)
cy.contains('Submit').click();
cy.wait(2000)
cy.get('.btn-volver').click()



    
  })
})