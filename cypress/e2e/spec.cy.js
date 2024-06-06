describe('User Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[type="email"]').type('user@example.com');
        cy.get('input[type="password"]').type('password');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('nav').contains('User Form').click();
    });

    it('should display validation errors for empty fields', () => {
        cy.get('button[type="submit"]').should('be.visible').click();
        cy.get('p').should('contain', 'Name is required');
        cy.get('p').should('contain', 'Email is required');
        cy.get('p').should('contain', 'Password is required');
        cy.get('p').should('contain', 'File is required');
    });

    it('should display a validation error for passwords that do not match', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="password"]').first().type('password123');
        cy.get('input[name="confirmPassword"]').last().type('password321');
        cy.get('button[type="submit"]').click();
        cy.get('p').should('contain', 'Passwords must match');
    });

    it('should show real-time validation errors', () => {
        cy.get('input[name="name"]').focus().blur();
        cy.get('p').should('contain', 'Name is required');

        cy.get('input[name="email"]').focus().blur();
        cy.get('p').should('contain', 'Email is required');

        cy.get('input[name="password"]').first().focus().blur();
        cy.get('p').should('contain', 'Password is required');
    });

    it('should submit the form successfully when all fields are valid', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="password"]').first().type('password123');
        cy.get('input[name="confirmPassword"]').last().type('password123');
        cy.get('input[type="file"]').selectFile('cypress/fixtures/testfile.txt'); // Ensure this file exists
        cy.get('button[type="submit"]').click();
        cy.get('p').should('contain', 'Form submitted successfully!');
        cy.get('.modal').should('be.visible');
        cy.get('.close').click();
        cy.get('.modal').should('not.exist');
    });

    it('should display an error message if the API call fails', () => {
        cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', {
            statusCode: 500,
            body: {},
        }).as('postUser');

        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="password"]').first().type('password123');
        cy.get('input[name="confirmPassword"]').last().type('password123');
        cy.get('input[type="file"]').selectFile('cypress/fixtures/testfile.txt'); // Ensure this file exists
        cy.get('button[type="submit"]').click();

        cy.wait('@postUser');

        cy.get('p').should('contain', 'Failed to submit form. Please try again later.');
    });
});
