/// <reference types="cypress" />

context('Funcionalidade login', () =>{
    it('Deve  Fazer login com sucesso' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    })
    
    it('Deve exibir uma mensagem de erro ao inserir senha ou usuario incorrecto', () =>{

    })
})