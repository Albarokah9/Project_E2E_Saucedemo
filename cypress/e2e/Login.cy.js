/// <reference types="cypress" />
import LoginPage from '../support/page_objects_model/LoginPage';

describe('Login Test', () => {
    beforeEach(function () {
        cy.visit('/');
        cy.fixture('user.json').as('dataUser');
    });

    it('Login standard_user', () => {
        cy.get('@dataUser').then((dataUser) => {
            const standard_user = dataUser.standard_user;
            // login dengan page object model
            LoginPage.login(standard_user.username, standard_user.password)

                // Assertion: Url mengandung /inventory.html dan muncul teks "Products"
                // Berhasil login dan diarahkan ke halaman Products (inventory)
                .getUrlInventory()
                .getDashboardTitle();
        });
    });

    it('Login locked_out_user', () => {
        cy.get('@dataUser').then((dataUser) => {
            const locked_out_user = dataUser.locked_out_user;
            // login dengan page object model
            LoginPage.login(locked_out_user.username, locked_out_user.password)

                // Assertion: muncul pesan error "Epic sadface: Sorry, this user has been locked out."
                .getErrorMessage();
        });
    });

    it('Login problem_user', () => {
        cy.get('@dataUser').then((dataUser) => {
            const problem_user = dataUser.problem_user;
            // login dengan page object model
            LoginPage.login(problem_user.username, problem_user.password)

                // problem_user tetap berhasil login ke inventory dan muncul teks "Products"
                .getUrlInventory()
                .getDashboardTitle()

                // Assertion: semua gambar produk adalah gambar anjing
                // BUG[problem_user]: gambar/judul mismatch; Add to cart/Remove sebagian tak bisa diklik; Checkout Last Name tak bisa diinput.
                .getImageProduct();
        });
    });

    it('Login performance_glitch_user', () => {
        cy.get('@dataUser').then((dataUser) => {
            const performance_glitch = dataUser.performance_glitch_user;

            LoginPage.login(
                performance_glitch.username,
                performance_glitch.password
            )

                // Assertion: performance_glitch_user tetap berhasil login ke inventory
                // Proses logi akan sedikit lebih lama dari user lain
                // BUG[performance_glitch_user]: ada delay/glitch pasca-login; toleransi timeout perlu lebih besar.
                .getUrlInventory()
                .getDashboardTitle();
        });
    });

    it('Login error_user', () => {
        cy.get('@dataUser').then((dataUser) => {
            const error_user = dataUser.error_user;
            // login dengan page object model
            // Meski error_user memiliki username dan password yang benar, namun tidak bisa login
            // karena ada masalah pada sisi aplikasi
            LoginPage.login(error_user.username, error_user.password)

                // Assertion: error_user tetap berhasil login ke inventory
                .getUrlInventory()
                .getDashboardTitle();
        });
    });

    it('Login visual_user', () => {
        cy.get('@dataUser').then((dataUser) => {
            const visual_user = dataUser.visual_user;
            // login dengan page object model
            LoginPage.login(visual_user.username, visual_user.password)

                // Assertion: visual_user tetap berhasil login ke inventory
                // Semua gambar produk adalah gambar anjing
                // Tombol hamburger (menu) agak sedikit miring ke bawah dan tombol cart (keranjang) agak tidak sesaui dengan user lain
                .getUrlInventory()
                .getDashboardTitle();
        });
    });
});
