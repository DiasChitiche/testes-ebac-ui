/// <reference types="cypress" />

context('Funcionalidade login', () =>{
    it('Deve  Fazer login com sucesso' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('[name="username"]').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
        cy.get('[name="login"]').click()

        cy.get('.page-title').should('contain' , 'Minha conta')

    })
    
    it('Deve exibir uma mensagem de erro ao inserir senha ou usuario incorrecto', () =>{

    })
}) 