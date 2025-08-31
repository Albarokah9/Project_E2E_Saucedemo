class LogoutPage {
    getBurgerButton() {
        return cy.get('#react-burger-menu-btn');
    }

    getLogoutButton() {
        return cy.get('[data-test="logout-sidebar-link"]');
    }

    // Url Login
    UrlLogin() {
        return cy.url().should('include', 'saucedemo.com');
    }

    // method to verify the URL after logout
    getUrlLogin() {
        this.UrlLogin();
        return this;
    }

    // method click burger button
    clickBurgerButton() {
        this.getBurgerButton().click();
        return this;
    }

    // method click logout button
    clickLogoutButton() {
        this.getLogoutButton().click();
        return this;
    }
}

export default new LogoutPage();
