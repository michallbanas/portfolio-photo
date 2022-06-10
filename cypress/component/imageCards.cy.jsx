/// <reference types="cypress" />

import React from 'react';
import ImageCards from '../../src/components/images.jsx';
import data from '../../src/data/images-data.jsx';

describe('Component testing of image gallery', () => {
    beforeEach(() => {
        cy.mount(<ImageCards />)
    })
    it('should check imgs attributes', () => {
        cy.get("[data-test='testImage']")
            .should('have.class', 'card-image')
            .and('have.length', 9)
            .each((img) => {
                expect(img).to.be.visible
                expect(img).to.have.attr('src').contains('.jpg')
                expect(img).to.have.attr('width').to.equal('300')
                expect(img).to.have.attr('height').to.equal('375')               
            })
    })
    it('should compare alt text', () => {
        const imagAlt = data.map(image => image.altText)
        cy.get("[data-test='testImage']")
            .each((img) => {
                expect(img).to.have.attr('alt').not.to.be.empty
                expect(img.attr('alt')).to.be.oneOf(imagAlt)
        })
    })
})