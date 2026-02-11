describe('Verificação da página inicial e cadastro', () => {
    it('Carregar página inicial e realizar o cadastro', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
        cy.get('[data-test="input-name"]').type('Ana de Jesus');
        cy.get('[data-test="input-email"').type('nicolasAlura123@hotmail.com');
        cy.get('[data-test="input-password"]').type('Senha123');
        cy.get('[data-test="input-confirm-password"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
     })
})