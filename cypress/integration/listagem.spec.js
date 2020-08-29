/// <reference types="cypress" />
let Chance = require('chance');
let chance = new Chance();

context('Listagem', () => {
    it('Listagem sem registros', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status:200,
            response:'fx:webtable-get-vazio'
        }).as('getNewTable');
        cy.visit('WebTable.html');d

        cy.get('div[role=row]').should('have.length',1);

    });

    it.only('Listagem com apenas um registro', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status:200,
            response:'fx:webtable-get-unico'
        }).as('getNewTable');
        cy.visit('WebTable.html')

        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone');
        cy.get('@gridCellPhone').should('contain.text', '5408196723')
    });
});