describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("app loads with title heading, and persona question", () => {
      cy.get('h1')
      .findByText('The Pomodoro Timer')
      .should('exist')

      cy.get('h3')
      .findByText('Are you feeling smart or strong today?')
      .should('exist')
    })

    it("allows the selction of fitness or education utility", () => {
      cy
      .findByText("Strong")
      .click()

      cy.url().should('include', '/strong')

      cy.go('back')

      cy
      .findByText("Smart")
      .click()

      cy.url().should('include', '/smart')
    })
  })