/// <reference types="cypress" />

import React from 'react';
import Navbar from '../../src/components/navbar.jsx';

describe('Navbar', () => {
    it('renders without crashing', () => {
        cy.mount(<Navbar />);
        cy.get("[data-test='testNav']")
            .find('li')
            .should('be.visible')
            .and('have.length', 3)
            .each((li) => {
                const liTexts = ['Fotografia', 'O mne', 'Kontakt'];
                expect(li).not.to.be.empty
                expect(li).to.contain.text(liTexts[li.index()])
            })
    })
})