describe('Verificação da página inicial e cadastro', () => {
    beforeEach (() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })
    it('Carregar página inicial e realizar o cadastro', () => {
        
        cy.register('Ana de Jesus','nicolasAlura123@hotmail.com','Senha123','Senha123' )
     })
})