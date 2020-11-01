// describe("Input form", () => {
//     beforeEach(() => {
//         cy.visit('/');
//     })

//     it("focuses input on load", () => {
//         cy.focused().should('have.class', 'new-todo')
//     })

//     it('accepts  input', () => {
//         let typedText = "Buy Milk";
//         cy.get('.new-todo')
//             .type(typedText)  
//             .should('have.value', typedText);
//     })

//     context('Form submission', () => {
//         it.only('Adds a new todo on submit', () => {
//             cy.get('.new-todo')
//               .type('Buy Eggs')
//               .type('{enter}');
//         })
//     })
// })

//Learning only, don't run this specs, please...

function courseTesting(purpose, username, password, expected_test_result){
    baseUrl = 'https://courses.uet.vnu.edu.vn';

    it(purpose, () => {
        cy.visit(baseUrl);
        
        if(username != ''){
            cy.get('.input100')
              .type(username);
        } else {
            cy.get('#inputName')
              .focus()
              .blur()
        }

        if (password !== '') {
            cy.get('#inputPassword')
              .type(password);
        } else {
            cy.get('#inputPassword')
              .focus()
              .blur();
        }

        if(expected_test_result) {
            cy.url()
              .should('not.eq', 'https://courses.uet.vnu.edu.vn/alternateLogin/index.php?errorcode=3');
        } else {
            cy.url()
              .should('eq', 'https://courses.uet.vnu.edu.vn/alternateLogin/index.php?errorcode=3');
        }
    })
    describe('All fields are correct', () => {
        courseTesting(
          'All fields are correct',
          '18020294',
          'hihahiho',
          true,
        )
    });
    describe('field check', () => {})
}
