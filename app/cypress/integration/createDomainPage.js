
describe('Create Domain page', () => {
  it('Check that the page is rendered', () => {
    cy.visit('/domains/create');
    cy.findByText('Create Domain');
  });
});
