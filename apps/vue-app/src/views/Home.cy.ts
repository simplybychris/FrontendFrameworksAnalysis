import Home from './Home.vue'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.timeMark('start')
    cy.mount(Home)
    cy.timeSince('start')

    cy.timeMark('createThousandRows')
    cy.get('.createThousandRows').click()
    cy.timeSince('createThousandRows')

    cy.timeMark('update')
    cy.get('.update').click()
    cy.timeSince('update')

    cy.timeMark('append')
    cy.get('.append').click()
    cy.timeSince('append')   

    cy.timeMark('createTenThousandRows')
    cy.get('.createTenThousandRows').click()
    cy.timeSince('createTenThousandRows')   

    cy.timeMark('remove')
    cy.get('.remove').click()
    cy.timeSince('remove')  

    cy.timeMark('clear')
    cy.get('.clear').click()
    cy.timeSince('clear')     
  })
})