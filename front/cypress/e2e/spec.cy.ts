describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Gestion Stock');
    cy.contains('Mentions légales');
    cy.contains('a', 'Voir le stock').click();
    cy.get('a[title=Ajouter]').click();

    cy.get('input').eq(0).clear().type('titi');
    cy.get('input').eq(1).clear().type('1.56');
    cy.get('input').eq(2).clear().type('45');
    cy.contains('button', 'Ajouter').click();

    cy.contains('tbody', 'titi').click();

    cy.get('button[title=Supprimer]').click();
  });
});
