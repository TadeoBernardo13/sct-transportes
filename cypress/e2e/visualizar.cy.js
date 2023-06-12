const validUser = {
  nombre: "Tadeo Prueba Cypress",
  email: "valid@mail.com",
  password: "1234567890",
};

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#correo").type(validUser.email);
    cy.get("#contraseña").type(validUser.password);
    cy.get("button").click();
  });
});
