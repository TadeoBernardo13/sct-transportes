const validUser = {
  nombre: 'Tadeo Prueba Cypress',
  email: 'valid@mail.com',
  password: '1234567890',
}

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('button').click();
  })
})