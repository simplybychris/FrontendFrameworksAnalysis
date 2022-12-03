describe('Lighthouse', () => {
  it('should run performance audits', () => {
    cy.visit('/');
    cy.lighthouse();
  });
});