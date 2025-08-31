/// <reference types="cypress" />
import LoginPage from '../support/page_objects_model/LoginPage';

describe('Login Test', function ()  {
  beforeEach(function()  {
    cy.visit('/');
    cy.fixture('user').as('dataUser');
  });

  it('login standard_user', function () {
      const standard_user = this.dataUser.standard_user;
      // login dengan page object model
      LoginPage.login(standard_user.username, standard_user.password)

      // Assertion: Url mengandung /inventory.html dan muncul teks "Products"
      .getUrlInventory()
      .getDashboardTitle();      
  });


  it('login locked_out_user', function () {
      const locked_out_user = this.dataUser.locked_out_user;
      // login dengan page object model
      LoginPage.login(locked_out_user.username, locked_out_user.password)
  
      // Assertion: muncul pesan error "Epic sadface: Sorry, this user has been locked out."
      .getErrorMessage();
    
  });

  it('login problem_user', function () {
      const problem_user = this.dataUser.problem_user;
      // login dengan page object model
      LoginPage.login(problem_user.username, problem_user.password)

      // problem_user tetap berhasil login ke inventory dan muncul teks "Products"
      .getUrlInventory()
      .getDashboardTitle()

      // Assertion: semua gambar produk adalah gambar anjing
      .getImageProduct();
  });

  it('login performance_glitch_user', function ()  {
      const performance_glitch = this.dataUser.performance_glitch_user;
      
      LoginPage.login(performance_glitch.username, performance_glitch.password)

      // Assertion: performance_glitch_user tetap berhasil login ke inventory
      // Proses logi akan sedikit lebih lama dari user lain
      .getUrlInventory()
      .getDashboardTitle();
  });

  it('login error_user', function()  {
      const error_user = this.dataUser.error_user;
      // login dengan page object model
      // Meski error_user memiliki username dan password yang benar, namun tidak bisa login
      // karena ada masalah pada sisi aplikasi
      LoginPage.login( error_user.username,  error_user.password)

      // Assertion: error_user tetap berhasil login ke inventory
      .getUrlInventory()
      .getDashboardTitle();
    }); 
});
