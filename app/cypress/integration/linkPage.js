
describe('Link page', () => {
  it('Check that the page is rendered', () => {
    cy.visit('/domain/1/links/1');
    cy.findByText('johnsmith.com/');
  });
});
