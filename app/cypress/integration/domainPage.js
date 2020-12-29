
describe('Domain page', () => {
  it('Check that the page is rendered', () => {
    cy.visit('/domains');
    cy.findByText('Your Domains');
  });
});
