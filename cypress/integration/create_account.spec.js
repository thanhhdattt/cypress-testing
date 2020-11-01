import {account_create_elements} from "../support/pages/account_create.js"
import {account_create_messages} from "../support/pages/account_create.js"

describe('Account Creation Failure Paths', function() {
    beforeEach(function() {
        cy.visit("https://facebook.com");
    });

    it('Invalid email address', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("fake@email");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.contains('Female').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL))
            .to.exist;
    });

    it('Invalid Birthday', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("fake@email.com");
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("fake@email.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.MONTH).select('Month');
        cy.contains('Female').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.SELECT_YOUR_BIRTHDAY)).to.exist;
    });

    it('No Name', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("fake@email.com");
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("fake@email.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.contains('Female').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.WHATS_YOUR_NAME)).to.exist;
    });



});
