describe('Home Page', () => {
    it('should display the main headings and content', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Welcome to South East European University').should('be.visible');
        cy.contains('Our Mission').should('be.visible');
        cy.contains('Why Choose SEEU?').should('be.visible');
    });

    it('should display the campus image', () => {
        cy.visit('http://localhost:3000');
        cy.get('.campus-image').should('be.visible');
    });

    it('should show alert when Learn More button is clicked', () => {
        cy.visit('http://localhost:3000');
        cy.get('.learn-more-button').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Learn more about our programs!');
        });
    });
});

describe('About Page', () => {
    it('should display the main headings and content', () => {
        cy.visit('http://localhost:3000/about');
        cy.contains('About South East European University').should('be.visible');
        cy.contains('Our History').should('be.visible');
        cy.contains('Our Values').should('be.visible');
        cy.contains('Contact Us').should('be.visible');
    });

    it('should have links to contact and faculties pages', () => {
        cy.visit('http://localhost:3000/about');
        cy.get('a[href="/contact"]').should('exist');
        cy.get('a[href="/faculties"]').should('exist');
    });
});

describe('Contact Page', () => {
    it('should display the contact form and university contact details', () => {
        cy.visit('http://localhost:3000/contact');
        cy.contains('Contact Us').should('be.visible');
        cy.contains('Tetovo').should('be.visible');
        cy.contains('Skopje').should('be.visible');
        cy.get('input[name="name"]').should('be.visible');
        cy.get('input[name="email"]').should('be.visible');
        cy.get('input[name="subject"]').should('be.visible');
        cy.get('textarea[name="body"]').should('be.visible');
    });

    it('should submit the contact form', () => {
        cy.visit('http://localhost:3000/contact');
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('input[name="subject"]').type('Test Subject');
        cy.get('textarea[name="body"]').type('Test message');
        cy.get('button[type="submit"]').click();
        // Add assertion to verify the form submission success message if applicable
    });
});

describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[type="email"]').type('user@example.com');
        cy.get('input[type="password"]').type('password');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });

    it('should navigate to Profile page after login', () => {
        cy.get('nav').contains('Profile').click();
        cy.url().should('include', '/profile');
        cy.contains('Profile').should('be.visible');
    });

    it('should navigate to My Schedule page after login', () => {
        cy.get('nav').contains('My Schedule').click();
        cy.url().should('include', '/myschedule');
        cy.contains('My Schedule').should('be.visible');
    });

    it('should log out successfully', () => {
        cy.get('nav').contains('Logout').click();
        cy.url().should('eq', 'http://localhost:3000/login');
    });
});

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
        cy.get('button[type="submit"]').click();
        cy.contains('Name is required').should('be.visible');
        cy.contains('Email is required').should('be.visible');
        cy.contains('Password is required').should('be.visible');
    });

    it('should display a validation error for passwords that do not match', () => {
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password456');
        cy.get('button[type="submit"]').click();
        cy.contains('Passwords do not match').should('be.visible');
    });

    it('should show real-time validation errors', () => {
        cy.get('input[name="email"]').type('invalid-email');
        cy.contains('Invalid email format').should('be.visible');
    });

    it('should submit the form successfully when all fields are valid', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password123');
        cy.get('button[type="submit"]').click();
        // Add assertion to verify the form submission success message if applicable
    });

    it('should display an error message if the API call fails', () => {
        // Mock an API failure scenario
        cy.intercept('POST', '/api/userform', { statusCode: 500, body: { error: 'Internal Server Error' } });
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password123');
        cy.get('button[type="submit"]').click();
        cy.contains('Internal Server Error').should('be.visible');
    });
});

describe('Faculties Page', () => {
    it('should display all faculties', () => {
        cy.visit('http://localhost:3000/faculties');
        cy.contains('Faculty of Business and Economics').should('be.visible');
        cy.contains('Faculty of Law').should('be.visible');
        cy.contains('Faculty of Languages, Cultures and Communication').should('be.visible');
        cy.contains('Faculty of Contemporary Social Sciences').should('be.visible');
        cy.contains('Faculty of Contemporary Sciences and Technologies').should('be.visible');
        cy.contains('Faculty of Health Sciences').should('be.visible');
        cy.contains('Integrated Studies').should('be.visible');
        cy.contains('Doctoral School in SEEU').should('be.visible');
    });

    it('should navigate to faculty detail page when a faculty is clicked', () => {
        cy.visit('http://localhost:3000/faculties');
        cy.contains('Faculty of Business and Economics').click();
        cy.url().should('include', '/faculties/business-economics');
        cy.contains('Faculty of Business and Economics').should('be.visible');
    });
});
