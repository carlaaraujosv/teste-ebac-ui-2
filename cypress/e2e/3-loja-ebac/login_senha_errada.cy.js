/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve dar erro ao colocar senha errada', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username'). type ('carla.teste@teste.com.br')
        cy.get('#password'). type ('teste@12345')
        cy.get('.woocommerce-form > .button') . click()

        cy.get('.woocommerce-error > li') .should ('contain' , 'Erro: A senha fornecida para o e-mail carla.teste@teste.com.br está incorreta. Perdeu a senha?' )

    })




})