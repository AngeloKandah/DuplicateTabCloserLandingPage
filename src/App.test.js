/* eslint-disable no-undef */
import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

/* 
  Viewports: w: 1280 h: 920
  Viewports: w: 480 h: 720
  Validate color change on click
  Validate clicking button brings to different part of page
  Have Mobile and Desktop tests
*/
describe('Base Case', () => {
  beforeEach(() => {
    mount(<App />);
  });
  it('renders Duplicate Tab Closer', () => {
    cy.get('h1').contains('Duplicate Tab Closer');
  });
  it('changes the navbar to mobile', () => {
    cy.viewport(480, 720);
    cy.get('[id=desktop-navbar]').should('be.hidden');
    cy.get('[id=mobile-navbar-button]').should('be.visible');
  });
  it('changes the navbar to desktop', () => {
    cy.viewport(1280, 920);
    cy.get('[id=mobile-navbar-button]').should('be.hidden');
    cy.get('[id=desktop-navbar]').should('be.visible');
  });
});

describe('Mobile Dropdown', () => {
  beforeEach(() => {
    mount(<App />);
    cy.viewport(480, 720);
    cy.get('[id=mobile-navbar-button]').click();
  });
  it('renders the Dropdown and all its pages', () => {
    cy.get('[id=mobile-navbar]')
      .should('be.visible')
      .children()
      .should('have.length', 6);
  });
  it('moves page to Move Tabs section', () => {
    cy.get('[id=mobile-navbar]').children().contains('Move Tabs').click();
    cy.hash().should('eq', '#Move%20Tabs');
  });
});
