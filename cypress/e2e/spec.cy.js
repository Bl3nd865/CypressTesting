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
        cy.get('p').should('contain', 'Passwords do not match');
    });

    it('should show real-time validation errors', () => {
        cy.get('input[name="name"]').focus().blur();
        cy.get('p').should('contain', 'Name is required');

        cy.get('input[name="email"]').focus().blur();
        cy.get('p').should('contain', 'Email is required');

        cy.get('input[name="password"]').focus().blur();
        cy.get('p').should('contain', 'Password is required');

        cy.get('input[name="confirmPassword"]').focus().blur();
        cy.get('p').should('contain', 'Confirm Password is required');

        cy.get('input[name="file"]').focus().blur();
        cy.get('p').should('contain', 'File is required');
    });

    it('should submit the form successfully when all fields are valid', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="password"]').first().type('password123');
        cy.get('input[name="confirmPassword"]').last().type('password123');
        cy.get('input[name="file"]').attachFile('testfile.txt');
        cy.get('button[type="submit"]').click();
        cy.get('p').should('contain', 'Form submitted successfully');
    });

    it('should display an error message if the API call fails', () => {
        cy.intercept('POST', '/api/users', {
            statusCode: 500,
            body: { message: 'Internal Server Error' },
        }).as('postUser');

        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="password"]').first().type('password123');
        cy.get('input[name="confirmPassword"]').last().type('password123');
        cy.get('input[name="file"]').attachFile('testfile.txt');
        cy.get('button[type="submit"]').click();
        cy.wait('@postUser');
        cy.get('p').should('contain', 'Internal Server Error');
    });
});

describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should navigate to Home page', () => {
        cy.get('nav').contains('Home').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });

    it('should navigate to About page', () => {
        cy.get('nav').contains('About').click();
        cy.url().should('eq', 'http://localhost:3000/about');
    });

    it('should navigate to Contact page', () => {
        cy.get('nav').contains('Contact').click();
        cy.url().should('eq', 'http://localhost:3000/contact');
    });

    it('should navigate to My Schedule page after login', () => {
        cy.get('nav').contains('Login').click();
        cy.get('input[type="email"]').type('user@example.com');
        cy.get('input[type="password"]').type('password');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('nav').contains('My Schedule').click();
        cy.url().should('eq', 'http://localhost:3000/myschedule');
    });

    it('should navigate to Faculty pages', () => {
        cy.visit('http://localhost:3000/faculties');
        cy.get('a').contains('Faculty of Business and Economics').click();
        cy.url().should('include', '/faculties/business-economics');
        cy.get('a.back-button').click();
        cy.url().should('include', '/faculties');

        cy.get('a').contains('Faculty of Law').click();
        cy.url().should('include', '/faculties/law');
        cy.get('a.back-button').click();
        cy.url().should('include', '/faculties');

        cy.get('a').contains('Faculty of Languages, Cultures and Communication').click();
        cy.url().should('include', '/faculties/languages-cultures-communication');
        cy.get('a.back-button').click();
        cy.url().should('include', '/faculties');

        cy.get('a').contains('Faculty of Contemporary Social Sciences').click();
        cy.url().should('include', '/faculties/contemporary-social-sciences');
        cy.get('a.back-button').click();
        cy.url().should('include', '/faculties');

        cy.get('a').contains('Faculty of Contemporary Sciences and Technologies').click();
        cy.url().should('include', '/faculties/contemporary-sciences-technologies');
        cy.get('a.back-button').click();
        cy.url().should('include', '/faculties');

        cy.get('a').contains('Faculty of Health Sciences').click();
        cy.url().should('include', '/faculties/health-sciences');
        cy.get('a.back-button').click();
        cy.url().should('include', '/faculties');

        cy.get('a').contains('Integrated Studies').click();
        cy.url().should('include', '/faculties/integrated-studies');
        cy.get('a.back-button').click();
        cy.url().should('include', '/faculties');

        cy.get('a').contains('Doctoral School').click();
        cy.url().should('include', '/faculties/doctoral-school');
        cy.get('a.back-button').click();
        cy.url().should('include', '/faculties');
    });
});
