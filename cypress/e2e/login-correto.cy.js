describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Preencher os campos do formulário de login', () => {

        cy.login('nicolasAlura123@hotmail.com','Senha123')
    
     })
})