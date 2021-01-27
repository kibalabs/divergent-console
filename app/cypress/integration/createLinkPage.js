
describe('Create Link page', () => {
  it('Check that the page is rendered', () => {
    cy.visit('/domain/1/links/create');
    cy.findByText('Create Link');
  });
});
