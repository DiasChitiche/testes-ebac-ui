/// <reference types="cypress" />

context('Funcionalidade login', () =>{
  
  it('Deve  Fazer login com sucesso' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('[name="username"]').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
        cy.get('[name="login"]').click()

        cy.get('.page-title').should('contain' , 'Minha conta')

    })
    
    it('Deve exibir uma mensagem de erro ao inserir usuario incorrecto', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('[name="username"]').type('aluno_ebac@teste.co')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
        cy.get('[name="login"]').click()

        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha incorrecto', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('[name="username"]').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.m')
        cy.get('[name="login"]').click()

        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })  


})