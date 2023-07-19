beforeEach(() => {
  cy.visit("http://localhost:5173");
});

//Dentro del bloque "describe" van todas las pruebas;
describe('Note app', function() {
  it('front page can be opened',  function() {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2020')
  })

  //Cypress busca el botón Login dentro de la pagina y hace click;
  it("Login form can be opened", function() {
    cy.contains("Login").click();
  });

  it("User can login", function() {
    cy.contains("Login").click();
    cy.get("#username").type("Riky Fort");
    cy.get("#password").type("12345");
    cy.get("#login-button").click();
    cy.contains("Ricardo");
  });
});