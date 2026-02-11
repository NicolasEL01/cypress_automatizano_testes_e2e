describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Preencher os campos do formulário de login', () => {
        cy.get('[data-test="input-loginEmail"]').type('nicolasAlura123@hotmail.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
        
     })
})