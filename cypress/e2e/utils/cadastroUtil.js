export function preencherUsername(selector) {
    const usernames = ['ana_maria98', 'maria_antonia76', 'ant_noleta90', 'antoleta_598', 'carlos0111', 'carlos00444_n', 'cta_henrique011', ];
    const randomUsername = usernames[Math.floor(Math.random() * usernames.length)]

    cy.get(selector).type(randomUsername, { delay: 150 });
    Cypress.env('username', randomUsername)
    cy.wrap(randomUsername).as('username');
    return randomUsername
}

export function preencherEmail(selector) {
    const email = ['carlos_ti@email.com', 'antonio_opera@email.com', 'nunes_henr@email.com',
        'roger_556@email.com', 'braga_ntino96@email.com', 'vitor_br89@email.com', 'will_souza@email.com'];

    const randomEmail = email[Math.floor(Math.random() * email.length)]

    cy.get(selector).type(randomEmail, { delay: 150 });

    cy.wrap(randomEmail).as('emails');
    return randomEmail
}

export function preencherSenha(selector) {
    const senha = ['Teste123', 'Teste1234', 'Teste12345'];

    const randomSenha = senha[Math.floor(Math.random() * senha.length)]

    cy.get(selector).type(randomSenha, { delay: 150 });
    Cypress.env('senha', randomSenha)
    cy.wrap(randomSenha).as('senha');
    return randomSenha
}

