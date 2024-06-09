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
        cy.contains('Learn More').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Learn more about our programs!');
        });
    });
});

describe('About Page', () => {
    it('should display the main headings and content', () => {
        cy.visit('http://localhost:3000/about');
        cy.contains('About South East European University').should('be.visible');
        cy.contains('Our History').should('be.visible');
        cy.contains('Our Values').should('be.visible');
    });

    it('should have links to contact and faculties pages', () => {
        cy.visit('http://localhost:3000/about');
        cy.get('a[href="/contact"]').should('be.visible');
        cy.get('a[href="/faculties"]').should('be.visible');
    });
});

describe('Contact Page', () => {
    it('should display the contact form and university contact details', () => {
        cy.visit('http://localhost:3000/contact');
        cy.contains('Contact Us').should('be.visible');
        cy.get('form').should('be.visible');
    });

    it('should submit the contact form', () => {
        cy.visit('http://localhost:3000/contact');
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('input[name="subject"]').type('Inquiry');
        cy.get('textarea[name="body"]').type('I have a question about your programs.');
        cy.get('button[type="submit"]').click();
        cy.contains('Form submitted successfully!').should('be.visible');
    });
});

describe('Authentication', () => {
    it('should navigate to Profile page after login', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[type="email"]').type('user@example.com');
        cy.get('input[type="password"]').type('password');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('nav').contains('Profile').click();
        cy.url().should('eq', 'http://localhost:3000/profile');
    });

    it('should navigate to My Schedule page after login', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[type="email"]').type('user@example.com');
        cy.get('input[type="password"]').type('password');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('nav').contains('My Schedule').click();
        cy.url().should('eq', 'http://localhost:3000/myschedule');
    });

    it('should log out successfully', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[type="email"]').type('user@example.com');
        cy.get('input[type="password"]').type('password');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
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
    });

    it('should display a validation error for passwords that do not match', () => {
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password456');
        cy.get('button[type="submit"]').click();
        cy.contains('Passwords do not match').should('be.visible');
    });

    it('should show real-time validation errors', () => {
        cy.get('input[name="email"]').type('invalid-email');
        cy.contains('Enter a valid email address').should('be.visible');
    });

    it('should submit the form successfully when all fields are valid', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password123');
        cy.get('button[type="submit"]').click();
        cy.contains('Form submitted successfully!').should('be.visible');
    });

    it('should display an error message if the API call fails', () => {
        cy.intercept('POST', '/api/form', {
            statusCode: 500,
            body: {
                error: 'Server error. Please try again later.'
            }
        });
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password123');
        cy.get('button[type="submit"]').click();
        cy.contains('Server error. Please try again later.').should('be.visible');
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
