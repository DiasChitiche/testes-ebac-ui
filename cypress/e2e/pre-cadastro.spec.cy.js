/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade pre cadastro', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('deve Completaroo pre cadastro com sucesso  ', () => {
    let email = faker.internet.email()
    let fristnames = faker.person.firstName()
    let lastnames = faker.person.lastName()

    cy.get('[name="email"]').type(email)
    cy.get('.register > :nth-child(2) > [name="password"]').type('DiasJunior2023&')
    cy.get('[name="register"]').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('[name="account_first_name"]').type(fristnames)
    cy.get('[name="account_last_name"]').type(lastnames)
    cy.get('[name="save_account_details"]').click()
    cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.') 
  });
  
});