/// <reference types="cypress" />

import React from 'react';
import ImageCards from '../../src/components/images.jsx';

describe('Images', () => {
    it('renders without crashing', () => {
        cy.mount(<ImageCards />);
        cy.get("[data-test='testImage']")
            .should('have.length', 3).each((img) => {
                expect(img).to.have.attr('src').contains('.jpg')
                expect(img).to.have.attr('alt').not.to.be.empty
                expect(img).to.have.attr('width').to.equal('300')
            })
    })
})