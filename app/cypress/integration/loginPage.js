
describe('Login page', () => {
  it('Check that an error is displayed if an email address is not entered', () => {
    cy.visit('/login');
  });

  it('Check that an error is displayed if the email address is invalid', () => {
    cy.visit('/login');
  });

  it('Check that an error is displayed if the password is not entered', () => {
    cy.visit('/login');
  });

  it('Check that errors are displayed if the email address and password are not entered', () => {
    cy.visit('/login');
  });

  it('Check that an error is displayed if the credentials are incorrect', () => {
    cy.visit('/login');
  });

  it('Check that clicking on `Create Account` navigates you to the /register page', () => {
    cy.visit('/login');
  });

  it('Check that clicking on `Forgot Password?` navigates you to the /forgot-password page', () => {
    cy.visit('/login');
  });

  it('Check that clicking on `Sign in` navigates you to the /domains page', () => {
    cy.visit('/login');
  });

  it('Check that successful login in redirects to the redirect path (with query params)', () => {
    cy.visit('/login');
  });
});
