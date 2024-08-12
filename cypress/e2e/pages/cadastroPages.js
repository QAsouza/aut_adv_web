import { preencherSenha, preencherUsername, preencherEmail } from '../utils/cadastroUtil'

class CadastroUsuario{
    acessoApp(){
        cy.visit('https://advantageonlineshopping.com/#/');
        cy.url().should('include', '/#')
    }

    acessandoTelaCadastro(){
        cy.get('#menuUserSVGPath').click({force: true})
        cy.get('.secForm > [a-hint="Username"] > .inputContainer > .ng-pristine').should('be.visible')
        cy.get('.secForm > [a-hint="Password"] > .inputContainer > .ng-pristine').should('be.visible')
        cy.get('.create-new-account').click()
    }

    validandoCamposVazios(){
        cy.url().should('include', '/register')
        cy.get(':nth-child(2) > [a-hint="Username"] > .inputContainer > label').should('have.value', '')
        cy.get('[sec-name="userEmail"] > .inputContainer > label').should('have.value', '')
        cy.get(':nth-child(3) > [a-hint="Password"] > .inputContainer > label').should('have.value', '')
        cy.get('[a-hint="Confirm password"] > .inputContainer > label').should('have.value', '')

    }

    validandoBtDesabilitado(){
         cy.get('#register_btn').should('not.be.enabled')
    }

    telaCadastro(){
       cy.url().should('include', '/register').wait(2000)
    }

    prenchendoCampos(){
        const username = preencherUsername(':nth-child(2) > [a-hint="Username"] > .inputContainer > label')
        const email = preencherEmail('[sec-name="userEmail"] > .inputContainer > label')
        const senha = preencherSenha(':nth-child(3) > [a-hint="Password"] > .inputContainer > label')
        cy.get('@senha').then((senha), () => {
            cy.get('[a-hint="Confirm password"] > .inputContainer > label').type(senha)
        })
    }

    concluindoCadastro(){
        cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').click()
        cy.get('#register_btn').should('not.be.disabled').scrollIntoView().click()
        cy.get('#menuUserLink').should('be.visible')
    }

    acessandoTelaLogin(){
        cy.get('#menuUserSVGPath').click({force: true})
    }

    validandoCamposVazios(){
        cy.get('.secForm > [a-hint="Username"] > .inputContainer > .ng-pristine').should('have.value', '')
        cy.get('.secForm > [a-hint="Password"] > .inputContainer > .ng-pristine').should('have.value', '')
        cy.get('#sign_in_btn').should('not.be.enabled')
    }

    inserindoDadosIncorretos(){
        cy.get('.secForm > [a-hint="Username"] > .inputContainer > .ng-pristine').type('errLogin')
        cy.get('.secForm > [a-hint="Password"] > .inputContainer > .ng-pristine').type('Err')
        cy.get('#sign_in_btn').click()
        cy.get('#signInResultMessage').should('be.visible')
    }

    EfetuandoLogin(){
        const username = Cypress.env('username');
        const password = Cypress.env('senha');
        cy.get('.secForm > [a-hint="Username"] > .inputContainer > .ng-pristine').clear().type(username)
        cy.get('.secForm > [a-hint="Password"] > .inputContainer > .ng-pristine').clear().type(password)
        cy.get('#sign_in_btn').should('not.be.disabled').click()
    }

    validandoLogin(){
        const username = Cypress.env('username');
        cy.url().should('include', '/#')
        cy.get('#menuUserLink').should('be.visible').click()
        cy.get('#loginMiniTitle > [translate="My_account"]').click()
        cy.contains('span', username)
    }

    validanoRetornoErro(){
        cy.wait(1000)
        const username = Cypress.env('username')
        const password = Cypress.env('senha')
        cy.get('[a-hint="Username"] > .inputContainer > .ng-valid').clear().type(username).wait(1000)
        cy.get('[a-hint="Password"] > .inputContainer > .ng-valid').clear().type(password)
        cy.get('#sign_in_btn').click()
        cy.get('#signInResultMessage').should('be.visible')
        
    }

    deletandoUsuario(){
        cy.get('#menuUserLink').click()
        cy.get('#loginMiniTitle > [translate="My_account"]').click()
        cy.get('.deleteMainBtnContainer').scrollIntoView().click()
        cy.contains('p', 'Are sure you want to delete account?').should('be.visible')
        cy.get('.deleteRed').click()
        cy.contains('div', 'Account deleted successfully').should('be.visible')
    }

}
export default new CadastroUsuario();