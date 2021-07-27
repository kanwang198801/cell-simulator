/// <reference types="cypress" />

describe('Main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Load game board', () => {
    cy.get('#board').should('exist');
    cy.get('#board').find('.cell').should('exist');
    cy.get('#game-controllers').should('exist');
    cy.get('#game-controllers').find('#next-generation-button').should('exist');
    cy.get('#game-controllers').find('#reset-game-button').should('exist');
    cy.get('#board').find('.cell').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
  });

  it('Cell can be selected and unselected', () => {
    cy.get('#board').find('.cell').first().click();
    cy.get('#board').find('.cell').first().should('have.css', 'background-color', 'rgb(0, 0, 0)');
    cy.get('#board').find('.cell').first().click();
    cy.get('#board').find('.cell').first().should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
  });

  it('Reset button works', () => {
    cy.get('#board').find('.cell').eq(190).click();
    cy.get('#board').find('.cell').eq(191).click();
    cy.get('#board').find('.cell').eq(190).should('have.css', 'background-color', 'rgb(0, 0, 0)');
    cy.get('#board').find('.cell').eq(190).should('have.css', 'background-color', 'rgb(0, 0, 0)');
    cy.get('#game-controllers').find('#reset-game-button').click();
    cy.get('#board').find('.cell').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
  });

  it('A Cell with fewer than two live neighbours dies of under-population', () => {
    cy.get('#board').find('.cell').eq(190).click();
    cy.get('#board').find('.cell').eq(191).click();
    cy.get('#game-controllers').find('#next-generation-button').click();
    cy.get('#board').find('.cell').eq(190).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get('#board').find('.cell').eq(191).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
  });

  it('A Cell with 2 or 3 live neighbours lives on to the next generation', () => {
    cy.get('#board').find('.cell').eq(190).click();
    cy.get('#board').find('.cell').eq(191).click();
    cy.get('#board').find('.cell').eq(192).click();
    cy.get('#game-controllers').find('#next-generation-button').click();
    cy.get('#board').find('.cell').eq(190).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get('#board').find('.cell').eq(191).should('have.css', 'background-color', 'rgb(0, 0, 0)');
  });

  it('A Cell with more than 3 live neighbours dies of overcrowding', () => {
    cy.get('#board').find('.cell').eq(189).click();
    cy.get('#board').find('.cell').eq(190).click();
    cy.get('#board').find('.cell').eq(191).click();
    cy.get('#board').find('.cell').eq(170).click();
    cy.get('#board').find('.cell').eq(210).click();
    cy.get('#game-controllers').find('#next-generation-button').click();
    cy.get('#board').find('.cell').eq(190).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
  });

  it('An empty Cell with exactly 3 live neighbours "comes to life"', () => {
    cy.get('#board').find('.cell').eq(190).click();
    cy.get('#board').find('.cell').eq(192).click();
    cy.get('#board').find('.cell').eq(171).click();
    cy.get('#game-controllers').find('#next-generation-button').click();
    cy.get('#board').find('.cell').eq(191).should('have.css', 'background-color', 'rgb(0, 0, 0)');
  });
});
