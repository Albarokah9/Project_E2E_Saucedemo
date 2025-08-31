/// <reference types="cypress" />

import LoginPage from '../support/page_objects_model/LoginPage';
import LogoutPage from '../support/page_objects_model/LogoutPage';

describe('Logout Test', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('user.json').as('dataUser');
    });

    it('Logout Test', () => {
        cy.get('@dataUser').then((dataUser) => {
            const standard_user = dataUser.standard_user;
            // login dengan page object model
            LoginPage.login(standard_user.username, standard_user.password)
                // Assertion: Url mengandung /inventory.html dan muncul teks "Products"
                // Berhasil login dan diarahkan ke halaman Products (inventory)
                .getUrlInventory()
                .getDashboardTitle();
            // logout dengan page object model
            // Assertion: Url mengandung saucedemo.com
            // Berhasil logout dan diarahkan ke halaman login
            LogoutPage.clickBurgerButton().clickLogoutButton().UrlLogin;
        });
    });
});
