describe('Clients', () => {
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
  const crearPersona = () => {
    // Aquí se ingresa al modulo de Persona
    cy.xpath('/html/body/div[1]/div/aside/div/ul/li[3]').click();
    cy.wait(1000);
    // Aquí se le clickea al botón de crear Persona
    cy.xpath('/html/body/div[1]/div/div/main/main/div[1]/div/span/div/div[3]/button').click();
    cy.wait(1000);

    // Primer Campo - Nombre
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[1]/div/div[2]/div/div/input'
    ).type(nombre);

    // Segundo Campo - Apellido
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[2]/div/div[2]/div/div/input'
    ).type(nombre);

    //Guardar Persona
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[2]/div/div/div/div/button'
    ).click();

    cy.wait(1000);
    cy.xpath('/html/body/div[3]/div/div[3]/div/div[1]/div/button').click();
  };
  const crearEmpresa = () => {
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

    // Quinto Campo - Email
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[5]/div/div[2]/div/div/input'
    ).type(nombre + '@gmail.com');

    //Guardar Empresa
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[2]/div/div/div/div/button'
    ).click();

    //Cerrar Modal
    cy.wait(1000);
    cy.xpath('/html/body/div[3]/div/div[3]/div/div[1]/div/button').click();
  };

  it('Empresa - Valid', () => {
    crearEmpresa();

    // Aquí se ingresa al modulo de Clientes
    cy.xpath('/html/body/div[1]/div/aside/div/ul/li[2]').click();
    cy.wait(1000);
    cy.xpath('/html/body/div[1]/div/div/main/main/div[1]/div/span/div/div[3]/button').click();
    cy.wait(1000);

    // Primer Campo - TipoEmpresa
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[1]/div/div[2]/div/div/div/div/span[1]/input'
    ).click();
    cy.xpath('/html/body/div[4]/div/div/div[2]/div/div/div/div[2]').click();

    // Segundo Campo - Empresa
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[2]/div/div[2]/div/div/div/div/span[1]/input'
    ).click();
    cy.wait(1000);

    const xpathExpression = `//div[contains(@class, 'ant-select-item-option-content') and contains(text(), '${nombre}')]`;
    cy.xpath(xpathExpression).click();
    cy.wait(9000);
    //Guardar
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[2]/div/div/div/div/button'
    ).click();

    cy.xpath('/html/body/div[4]/div/div/div/div/div[2]').should('be.visible');
  });

  it('Cliente - Valido', () => {
    crearPersona();

    // Aquí se ingresa al modulo de Clientes
    cy.xpath('/html/body/div[1]/div/aside/div/ul/li[2]').click();
    cy.wait(1000);
    cy.xpath('/html/body/div[1]/div/div/main/main/div[1]/div/span/div/div[3]/button').click();
    cy.wait(1000);

    // Primer Campo - TipoPersona
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[1]/div/div[2]/div/div/div/div/span[1]/input'
    ).click();
    cy.xpath('/html/body/div[4]/div/div/div[2]/div/div/div/div[1]/div').click();

    // Segundo Campo - Persona
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[1]/div[2]/div/div[2]/div/div/div/div/span[1]/input'
    ).click();
    cy.wait(1000);

    const xpathExpression = `//div[contains(@class, 'ant-select-item-option-content') and contains(text(), '${nombre} ${nombre}')]`;

    cy.xpath(xpathExpression).click();

    //Guardar
    cy.xpath(
      '/html/body/div[3]/div/div[3]/div/div[2]/div/div[3]/div[3]/div/div/div/div/div/form/div[2]/div/div/div/div/button'
    ).click();

    cy.xpath('/html/body/div[4]/div/div/div/div/div[2]').should('be.visible');
  });

  it('EliminarCliente - Valido', () => {
    // Aquí se ingresa al modulo de Clientes
    cy.xpath('/html/body/div[1]/div/aside/div/ul/li[2]').click();
    cy.wait(1000);

    cy.contains('td', nombre) // Busca la celda con el nombre deseado en cualquier columna
      .parent() // Obtiene la fila (`<tr>`) que contiene esa celda
      .find('svg') // Encuentra el botón dentro de esa fila
      .click();

    //Eliminar
    cy.xpath('/html/body/div[3]/div/ul/li[4]/span[2]').click();

    //Confirmar
    cy.xpath('/html/body/div[4]/div/div[2]/div/div[2]/div/div[3]/button[2]/span').click();
    cy.wait(1000);

    //Debe mostrar el mensaje de eliminación exitosa, pero da error de que no se borro
    cy.xpath('/html/body/div[5]/div/div/div/div/div[2]').should('be.visible');
  });
});
