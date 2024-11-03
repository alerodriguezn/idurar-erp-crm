describe('companies', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    // Bloque para loguearse
    cy.visit('https://cloud.idurarapp.com/login');
    cy.wait(1000);
    cy.xpath(
      '/html/body/div/div/div/div[2]/main[2]/div[3]/div/div/form/div[1]/div[1]/div[1]/div[2]/div[1]/div/span/input'
    ).type('navarrrocmo@gmail.com');
    cy.wait(1000);
    cy.get('input[id="normal_login_password"]').type('qa123456');
    cy.xpath(
      '/html/body/div/div/div/div[2]/main/div[3]/div/div/form/div[2]/div/div/div/div/button'
    ).click();
    cy.wait(1000);
  });
  const nombre = 'Test';
  it('Company - InvalidEmail', () => {
    // Aquí se ingresa al modulo de Empresa
    cy.xpath('/html/body/div[1]/div/aside/div/ul/li[4]').click();
    cy.wait(1000);
    // Aquí se le clickea al botón de crear Empresa
    cy.xpath('/html/body/div[1]/div/div/main/main/div[1]/div/span/div/div[3]/button').click();
    cy.wait(1000);

    // Primer Campo - Nombre
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[1]/div/div[2]/div/div/input'
    ).type(nombre);

    // Segundo Campo - Persona
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[2]/div/div[2]/div/div/div/div/span[1]/input'
    ).click();
    cy.wait(1000);
    cy.xpath('/html/body/div[4]/div/div/div[2]/div/div/div/div[1]/div').click();

    // Tercer Campo - país
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[3]/div/div[2]/div/div/div/div/span[1]/input'
    ).click();
    cy.xpath('/html/body/div[5]/div/div/div[2]/div[1]/div/div/div[2]/div').click();

    // Cuarto Campo - Teléfono
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[4]/div/div[2]/div/div/input'
    ).type('1234567890');
    // Quinto Campo - Email
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[5]/div/div[2]/div/div/input'
    ).type(nombre + '@.com');

    //Sexto Campo - Web
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[6]/div/div[2]/div/div/span/span/input'
    ).type('www.test.com');

    //Guardar Empresa
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[2]/div/div/div/div/button'
    ).click();

    //verificar que se haya creado la empresa
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[5]/div[1]/div[2]/div[2]/div[1]/div'
    ).should('exist');
  });
  
  it('Company - Valid', () => {
    // Aquí se ingresa al modulo de Empresa
    cy.xpath('/html/body/div[1]/div/aside/div/ul/li[4]').click();
    cy.wait(1000);
    // Aquí se le clickea al botón de crear Empresa
    cy.xpath('/html/body/div[1]/div/div/main/main/div[1]/div/span/div/div[3]/button').click();
    cy.wait(1000);

    // Primer Campo - Nombre
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[1]/div/div[2]/div/div/input'
    ).type(nombre);

    // Segundo Campo - Persona
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[2]/div/div[2]/div/div/div/div/span[1]/input'
    ).click();
    cy.wait(1000);
    cy.xpath('/html/body/div[4]/div/div/div[2]/div/div/div/div[1]/div').click();

    // Tercer Campo - país
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[3]/div/div[2]/div/div/div/div/span[1]/input'
    ).click();
    cy.xpath('/html/body/div[5]/div/div/div[2]/div[1]/div/div/div[2]/div').click();

    // Cuarto Campo - Teléfono
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[4]/div/div[2]/div/div/input'
    ).type('1234567890');
    // Quinto Campo - Email
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[5]/div/div[2]/div/div/input'
    ).type(nombre + '@gmail.com');

    //Sexto Campo - Web
    cy.xpath('/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[6]/div/div[2]/div/div/span/span/input').type('www.test.com');

    //Guardar Empresa
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[2]/div/div/div/div/button'
    ).click();

    //verificar que se haya creado la empresa
    cy.xpath('/html/body/div[4]/div/div/div/div/div[2]').should('exist');
  });
  
});
