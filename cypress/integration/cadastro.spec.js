/// <reference types="cypress" />
let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastrodo de usuário no site', () => {
    //rotas 
        //GET 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        //POST 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        //POST 200 /api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
    cy.server();
    cy.route('POST','**/api/1/databases/userdetails/collections/newtable?**')
    .as('postNewTable');
    cy.route('POST','**/api/1/databases/userdetails/collections/usertable?**')
    .as('postUserTable');
    cy.route('GET','**/api/1/databases/userdetails/collections/newtable?**')
    .as('getNewTable');

        cy.visit('Register.html');
        cy.get('input[ng-model="FirstName"]').type(chance.first());
        cy.get('input[ng-model^="Last"]').type(chance.last());
        cy.get('input[ng-model^="Email"]').type(chance.email());
        cy.get('input[ng-model^="Phone"]').type(chance.phone({formatted:false}));
        cy.get('input[value=FeMale').check();
        cy.get('input[type=checkbox').check('Cricket');
        cy.get('input[type=checkbox').check('Hockey');
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Argentina');
        cy.get('select#country').select('Australia', {force:true});
        cy.get('select#yearbox').select('1996');
        cy.get('select[ng-model^=month]').select('February');
        cy.get('select#daybox').select('24');
        cy.get('input#firstpassword').type('A123@abc');
        cy.get('input#secondpassword').type('A123@abc');
        cy.get('input#imagesrc').attachFile('foto.png');
        cy.get('button#submitbtn').click();

        cy.wait('@postNewTable').then((resNewtabl)=> {
            //chai  //shoud / expect
            expect(resNewtabl.status).to.equal(200);
        })  

        cy.wait('@postUserTable').then((resUserTable)=> {
            expect(resUserTable.status).to.equal(200);
        })  

        cy.wait('@getNewTable').then((resGetNewTable)=> {
            expect(resGetNewTable.status).to.equal(200);
        })  

        //validar o direcionamnto da página
        cy.url().should('contain','WebTable');
    });
});