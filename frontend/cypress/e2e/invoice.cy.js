describe('template spec', () => {
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

    // Aquí se ingresa al modulo de Facturación
    cy.xpath('/html/body/div[1]/div/aside/div/ul/li[6]').click();
    cy.wait(1000);
    cy.xpath('/html/body/div[1]/div/div/main/main/div[1]/div/span/div/div[3]/button').click();
    cy.wait(1000);
  });
  // Función para seleccionar una opción de un menú desplegable
  const seleccionarOpcion = (selectorCampo, selectorOpcion) => {
    cy.xpath(selectorCampo).click();
    cy.xpath(selectorOpcion).click();
  };

  // Función para rellenar campos de texto
  const llenarCampo = (selectorCampo, valor) => {
    cy.xpath(selectorCampo).clear().type(valor).type('{enter}');
  };

  it('Factura Completa - Valido', () => {
    // Primer Campo - Cliente
    seleccionarOpcion(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[1]/div[1]/div/div/div[2]/div/div/div/div/span[1]/input',
      '/html/body/div[3]/div/div/div[2]/div/div/div/div[1]/div'
    );

    // Segundo Campo - Número
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[1]/div[2]/div/div/div[2]/div/div/div/div[2]/input',
      '123'
    );

    // Tercer Campo - Año
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[1]/div[3]/div/div/div[2]/div/div/div/div[2]/input',
      '2021'
    );

    // Cuarto Campo - Moneda
    seleccionarOpcion(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[1]/div[4]/div/div/div[2]/div/div/div/div',
      '/html/body/div[4]/div/div/div[2]/div/div/div/div[1]/div'
    );

    // Quinto Campo - Estado
    seleccionarOpcion(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[1]/div[5]/div/div/div[2]/div/div/div/div',
      '/html/body/div[5]/div/div/div[2]/div/div/div/div[1]/div'
    );

    // Sexto Campo - Fecha
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[1]/div[6]/div/div/div[2]/div/div/div/div',
      '10/10/2020'
    );

    // Séptimo Campo - Fecha de Vencimiento
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[1]/div[7]/div/div/div[2]/div/div/div',
      '10/10/2021'
    );

    // Octavo Campo - Nota
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[1]/div[8]/div/div/div[2]/div/div/input',
      'Nota de la factura'
    );

    // Noveno Campo - Artículo
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[4]/div[1]/div/div[1]/div/div[1]/div/input',
      'Articulo 1'
    );

    // Décimo Campo - Descripción
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[4]/div[2]/div/div/div/div/div/input',
      'Descripcion del articulo 1'
    );

    // Décimo Primer Campo - Cantidad
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[4]/div[3]/div/div[1]/div/div[1]/div/div/div[2]/input',
      '1'
    );

    // Décimo Segundo Campo - Precio
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[4]/div[4]/div/div[1]/div/div[1]/div/div/div/div[2]/div/input',
      '100'
    );

    // Décimo Tercer Campo - Seleccionar Impuesto
    seleccionarOpcion(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[7]/div[2]/div[1]/div/div[1]/div/div[1]/div/div/div',
      '/html/body/div[8]/div/div/div[2]/div/div/div/div[1]/div/span'
    );

    // Guardar
    //cy.xpath('/html/body/div[1]/div/div/main/main/div[3]/div/form/div[7]/div[1]/div[1]/div/div/div/div/div/button').click();

    // Verificar que el mensaje de éxito aparece
    cy.get('.ant-notification-notice-description')
      .should('be.visible')
      .and('contain', 'Invoice created successfully');
  });
    
  it('Factura Corta - Válido', () => {
    // Primer Campo - Cliente
    seleccionarOpcion(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[1]/div[1]/div/div/div[2]/div/div/div/div/span[1]/input',
      '/html/body/div[3]/div/div/div[2]/div/div/div/div[1]/div'
    );

    // Noveno Campo - Artículo
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[4]/div[1]/div/div[1]/div/div[1]/div/input',
      'Articulo 1'
    );

    // Décimo Primer Campo - Cantidad
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[4]/div[3]/div/div[1]/div/div[1]/div/div/div[2]/input',
      '1'
    );

    // Décimo Segundo Campo - Precio
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[4]/div[4]/div/div[1]/div/div[1]/div/div/div/div[2]/div/input',
      '100'
    );

    // Décimo Tercer Campo - Seleccionar Impuesto
    seleccionarOpcion(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[7]/div[2]/div[1]/div/div[1]/div/div[1]/div/div/div',
      '/html/body/div[4]/div/div/div[2]/div/div/div/div[1]/div/span'
    );
    // Guardar
    cy.xpath(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[7]/div[1]/div[1]/div/div/div/div/div/button'
    ).click();

    // Verificar que el mensaje de éxito aparece
    cy.get('.ant-notification-notice-description')
      .should('be.visible')
      .and('contain', 'Invoice created successfully');
  });

  it('Factura Corta - SinCliente', () => {
    // Noveno Campo - Artículo
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[4]/div[1]/div/div[1]/div/div[1]/div/input',
      'Articulo 1'
    );

    // Décimo Primer Campo - Cantidad
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[4]/div[3]/div/div[1]/div/div[1]/div/div/div[2]/input',
      '1'
    );

    // Décimo Segundo Campo - Precio
    llenarCampo(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[4]/div[4]/div/div[1]/div/div[1]/div/div/div/div[2]/div/input',
      '100'
    );

    // Décimo Tercer Campo - Seleccionar Impuesto
    seleccionarOpcion(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[7]/div[2]/div[1]/div/div[1]/div/div[1]/div/div/div',
      '/html/body/div[3]/div/div/div[2]/div/div/div/div[1]/div/span'
    );
    
    // Guardar
    cy.xpath(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[7]/div[1]/div[1]/div/div/div/div/div/button'
    ).click();

    // Verificar que el mensaje de error aparece
    cy.xpath(
      '/html/body/div[1]/div/div/main/main/div[3]/div/form/div[1]/div[1]/div/div[1]/div[2]/div[2]/div[1]/div'
    ).should('be.visible');
  });
});
