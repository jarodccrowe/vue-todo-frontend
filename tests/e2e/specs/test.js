// https://docs.cypress.io/api/introduction/api.html

describe('Todo List Tests', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h5', 'ToDo List')
  })
  it('Read tasks', () => {
    cy.visit('/')
    cy.get('.incomplete-task-list').contains('Walk the dog');
  })
  it('Create a task', () => {
    cy.visit('/')
    cy.get('[test-data-addtask]').click()
    cy.get('[test-data-name]').type('A new task')
    cy.get('.custom-control-label:first').click()
    cy.get('button[type]:submit').click()
    // cy.get('[test-data-submit]').click()
    cy.get('.incomplete-task-list').contains('A new task');
  })
  it('Update a task', () => {
    cy.visit('/')
    cy.get('[test-data-edittask]:first').click()
    cy.get('[test-data-editname').type('An edited task')
    cy.get('button[type]:submit').click()
    cy.get('.incomplete-task-list').contains('An edited task');
  })
  it('Complete a task', () => {
    cy.visit('/')
    cy.get('[test-data-completetask]:first').click()
    cy.get('.complete-task-list').contains('Walk the dog');
  })
  it('Delete a task', () => {
    cy.visit('/')
    cy.get('[test-data-deletetask]:first').click()
    cy.contains('Walk the dog').should('not.exist');
  })
})
