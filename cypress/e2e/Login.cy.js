/// <reference types="cypress" />
import LoginPage from '../support/page_objects_model/LoginPage';

describe('Login Test', function ()  {
  beforeEach(function()  {
    cy.visit('/');
    cy.fixture('user').as('dataUser');
  });

  it('login standard_user', function () {
      const standard_user = this.dataUser.standard_user;

      LoginPage.login(standard_user.username, standard_user.password)

      // Assertion: Url mengandung /inventory.html dan muncul teks "Products"
      .getUrlInventory()
      .getDashboardTitle();      
  });


  it('login locked_out_user', function () {
      const locked_out_user = this.dataUser.locked_out_user;

      LoginPage.login(locked_out_user.username, locked_out_user.password)
  
      // Assertion: muncul pesan error "Epic sadface: Sorry, this user has been locked out."
      .getErrorMessage();
    
  });

  it('login problem_user', function () {
      const problem_user = this.dataUser.problem_user;
      
      LoginPage.login(problem_user.username, problem_user.password)

      // problem_user tetap berhasil login ke inventory dan muncul teks "Products"
      .getUrlInventory()
      .getDashboardTitle()

      // Assertion: semua gambar produk adalah gambar anjing
      .getImageProduct();
  });

  // it('login performance_glitch_user', function ()  {
  //   cy.get('@dataUser').then(({ performance_glitch_user }) => {
  //     const { username, password } = performance_glitch_user;
      
  //     cy.get('[data-test="username"]').type(username);
  //     cy.get('[data-test="password"]').type(password);
  //     cy.get('[data-test="login-button"]').click();

  //     // Assertion: performance_glitch_user tetap berhasil login ke inventory
  //     cy.url().should('include', '/inventory.html');
  //     cy.get('[data-test="title"]').should('have.text', 'Products');
  //   }); 
  // });

  // it('login error_user', function()  {
  //   cy.get('@dataUser').then(({ error_user }) => {
  //     const { username, password } = error_user;
      
  //     cy.get('[data-test="username"]').type(username);
  //     cy.get('[data-test="password"]').type(password);
  //     cy.get('[data-test="login-button"]').click();

  //     // Assertion: error_user tetap berhasil login ke inventory
  //     cy.url().should('include', '/inventory.html');
  //     cy.get('[data-test="title"]').should('have.text', 'Products');
  //   }); 
  // });
});
