describe("Strong page", () => {
    beforeEach(() => {
        cy.visit('/smart')
    })
    it("Time decrements", () => {
        cy.clock()
        cy.get('.MuiButton-root').click()
        cy.tick(5000)
        cy.get('.MuiBox-root > h2').findByText("Time Until Break: 51:55").should('exist')
    })
    it("Popup notifying of break occurs after 52 minutes", () => {
        cy.clock()
        cy.get('.MuiButton-root').click()
        cy.tick(52*60000)
        cy.get('h2[id="modal-modal-title"]').findByText("You have 17:00 to spend with family, pets, loved ones, etc...").should('exist')
    })
    it("Break count down stops after 17 minutes", () => {
        cy.clock()
        cy.get('.MuiButton-root').click()
        cy.tick(52*60000)
        cy.tick(17*61000)
        cy.get('h2[id="modal-modal-title"]').findByText("You have 00:00 to spend with family, pets, loved ones, etc...").should('exist')
    })
    it("Clicking 'keep working' restart timer to 52 minutes", () => {
        cy.clock()
        cy.get('button').click()
        cy.tick(60*60000)
        cy.get('button').click()
        cy.get('.MuiBox-root > h2').findByText("Time Until Break: 52:00").should('exist')
    })
})