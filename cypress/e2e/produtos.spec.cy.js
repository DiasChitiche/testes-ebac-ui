/// <reference types="cypress" />

describe('Funcionalidade pagina Produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
     //.first()
     //.last()
     //.eq(4)

     .contains('Arcadio Gym Short')
     .click()

  });
  
  it('Deve adicionar o item ao carinho', () => {
    var quant = 8
    cy.get('[class="product-block grid"]')
     .contains('Arcadio Gym Short')
     .click()

     cy.get('.button-variable-item-34').click()
     cy.get('.button-variable-item-Black').click()
     cy.get('[name="quantity"]').clear().type(quant)
     cy.get('.single_add_to_cart_button').click()

     cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quant)
     cy.get('.woocommerce-message').should('contain' , quant)
     cy.get('.woocommerce-message').should('contain' , '× “Arcadio Gym Short” foram adicionados no seu carrinho.')
    
  });
});