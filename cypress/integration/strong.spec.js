describe("Strong page", () => {
    beforeEach(() => {
        cy.visit('/strong')
    })
    it("Time display correctly when entered", () => {
        cy.get('.MuiSelect-nativeInput').type('02:00:00', { force: true });
        cy.get('.MuiButton-root').click()
        cy.get('.MuiBox-root > h2').findByText("Pushups Left: 0 | Time Left: 02:00:00").should('exist')
    })
    it("Time decrements", () => {
        cy.clock()
        cy.get('.MuiSelect-nativeInput').type('02:00:00', { force: true });
        cy.get('.MuiButton-root').click()
        cy.tick(5000)
        cy.get('.MuiBox-root > h2').findByText("Pushups Left: 0 | Time Left: 01:59:55").should('exist')
    })
    it("Pushups display correctly when entered", () => {
        cy.get('input[id="mui-1"]').type('100');
        cy.get('.MuiButton-root').click()
        cy.get('.MuiBox-root > h2').findByText("Pushups Left: 100 | Time Left: 00:00:00").should('exist')
    })
    it("Pushups reps are calculated correctly", () => {
        cy.get('input[id="mui-1"]').type('100');
        cy.get('.MuiSelect-nativeInput').type('05:00:00', { force: true });
        cy.get('.MuiButton-root').click()
        cy.get('h2[id="modal-modal-title"]').findByText("Drop down and give me 20!").should('exist')
    })
    it("User alerted every hour", () => {
        cy.clock()
        cy.get('.MuiSelect-nativeInput').type('02:00:00', { force: true });
        cy.get('.MuiButton-root').click()
        cy.get('button').eq(0).click()
        cy.tick(3600000)
        cy.get('.MuiBox-root > h2').findByText("Pushups Left: 0 | Time Left: 01:00:00").should('exist')
        cy.get('button').eq(0).click()
        cy.tick(3600000)
        cy.get('.MuiBox-root > h2').findByText("Pushups Left: 0 | Time Left: 00:00:00").should('exist')
    })
    it("Pushup decrement every hour", () => {
        cy.clock()
        cy.get('input[id="mui-1"]').type('20');
        cy.get('.MuiSelect-nativeInput').type('02:00:00', { force: true });
        cy.get('.MuiButton-root').click()
        cy.get('button').eq(1).click()
        cy.get('.MuiBox-root > h2').findByText("Pushups Left: 10 | Time Left: 02:00:00").should('exist')
        cy.tick(3600000)
        cy.get('button').eq(1).click()
        cy.get('.MuiBox-root > h2').findByText("Pushups Left: 0 | Time Left: 01:00:00").should('exist')    
        cy.tick(3600000)
        cy.get('button').eq(1).click()
        cy.get('.MuiBox-root > h2').findByText("Pushups Left: 0 | Time Left: 00:00:00").should('exist')    
    })
})