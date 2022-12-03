import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
  it('mounts', () => {
    cy.timeMark('start')
    cy.mount(HomeComponent)
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

