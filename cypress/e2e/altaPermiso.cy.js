const validUser = {
  nombre: "Tadeo Prueba Cypress",
  email: "valid@mail.com",
  password: "1234567890",
};
const validPermiso = {
  noFolio: "23142357",
  permisionario: "Tadeo Prueba Cypress",
};

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#correo").type(validUser.email);
    cy.get("#contraseña").type(validUser.password);
    cy.get("button").click();

    cy.get(":nth-child(2) > .text-decoration-none").click();
    cy.get("#noFolioSiaf").type(validPermiso.noFolio);
    cy.get("#nombrePermisionario").type(validPermiso.permisionario);
    cy.get(".d-flex > .btn").click();
  });
});
