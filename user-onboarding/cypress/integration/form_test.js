describe('Go to the website', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
})

describe('button disabled at start', () => {
    it('is the button disabled', () => {
        cy.get('[data-cy=button]')
        .should('be.disabled')
    })
})

describe('can type in the fields', () => {
    it('can type name', () => {
        cy.get('input[name="name"]')
        .type('Dio Brando')
        .should('have.value', 'Dio Brando')
    })

    it('can type email', () => {
        cy.get('input[name="email"]')
        .type('iamdio@email.com')
        .should('have.value', 'iamdio@email.com')
    })

    it('can type password', () => {
        cy.get('input[name="password"]')
        .type('jdsfdsfd')
        .should('have.value', 'jdsfdsfd')
    })
})

describe('checkbox is checked', () => {
    it('can checkbox be checked', () => {
        cy.get('input[name="terms"]')
        .not("[disabled]")
        .check()
        .should('be.checked')
    })
})

describe('empty spots on form', () => {
    it('is anything not filled out', () => {
        cy.get('input[name="name"]').should('not.have.value')
        cy.get('input[name="email"]').should('not.have.value')
        cy.get('input[name="password"]').should('not.have.value')
        cy.get('input[name="terms"]').should('be.checked')
    })
})

describe('submit the form', () => {
    it('can submit the form', () => {
        cy.get('button.submit').should('not.be.disabled')
    })
})