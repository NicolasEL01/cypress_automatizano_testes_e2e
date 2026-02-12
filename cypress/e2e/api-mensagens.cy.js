describe('API Adopet - Mensagens autenticadas', () => {
  let token
  before(() => {
    cy.request({
      method: 'POST',
      url: 'https://adopet-api-i8qu.onrender.com/adotante/login',
      body: {
        email: 'nicolasAlura123@hotmail.com',
        password: 'Senha123'
      }
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 201])
      expect(res.body).to.have.property('token')
      expect(res.body.token).to.be.a('string').and.not.be.empty

      token = `Bearer ${res.body.token}`
    })
  })

  it('Deve buscar mensagens autenticadas via API', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
      headers: {
        Authorization: token
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.not.be.empty
      expect(res.body).to.have.property('msg')  
    })
  })
})
