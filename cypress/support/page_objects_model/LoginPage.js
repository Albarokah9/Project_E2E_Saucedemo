class LoginPage {
    // method to get the username input field
    usernameField() {
        return cy.get('[data-test="username"]');
    }
    // method to get the password input field
    passwordField() {
        return cy.get('[data-test="password"]');
    }
    // method to get the login button
    loginButton() {
        return cy.get('[data-test="login-button"]');   
    }
    // method to get the error message
    errorMessage() {
        return cy.get('[data-test="error"]');
    }
    // method to get the URL after login
    UrlInventory() {
        return cy.url().should('include', '/inventory.html');
    }
    // method to get the dashboard title
    dashboardTitle() {
        return cy.get('[data-test="title"]');
    }
    // Image product dog
    imageProduct() {
        return cy.get('.inventory_item_img img');
    }
    // method to visit the login page
    visit () {
        cy.visit('/');
    }
    // method to perform login action
    fillUsername(username) {
        this.usernameField().type(username);
        return this;
    }
    // method to fill in the password
    fillPassword(password) {
        this.passwordField().type(password);
        return this;
    }
    // method to click the login button
    clickLogin() {
        this.loginButton().click();
        return this;
    }
    // method to get the error message after login attempt
    getErrorMessage() {
        this.errorMessage().should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
        return this;    
    }
    // method to verify the URL after login
    getUrlInventory() {
        this.UrlInventory();
        return this;
    }
    // method to verify the dashboard title after login
    getDashboardTitle() {
        this.dashboardTitle().should('have.text', 'Products');
        return this;
    }
    // methode to verify the product images are dog images
    getImageProduct() {
        this.imageProduct().each(($img) => {
            cy.wrap($img).should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg');
            return this;
    });
        
    }
    // method to perform the complete login process
    login(username, password) {
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLogin();
        return this;
    }
}

export default new LoginPage();