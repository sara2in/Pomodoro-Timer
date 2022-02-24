describe("Strong page", () => {
    beforeEach(() => {
        cy.visit('/strong')
    })
    it("page loads with beautiful Arnold image", () => {
        cy.get('[alt="Arnold"]')
            .should('be.visible')
            .and(($img) => {
                // "naturalWidth" and "naturalHeight" are set when the image loads
                expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
    })

    // it("page loads with beautiful Arnold image", () => {
    //     cy.get('[alt="Arnold"]')
    //         .should('be.visible')
    //         .and(($img) => {
    //             // "naturalWidth" and "naturalHeight" are set when the image loads
    //             expect($img[0].naturalWidth).to.be.greaterThan(0)
    //         })
    // })
})