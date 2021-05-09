const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 })

    // Procedimiento por los escenarios:

    // Cada escenario esta compuesto por los siguietes casos de uso:
    // * L: login. Este caso ingresa a la plataforma Ghost. Aplica a todos los escenarios.
    // * O: logout. Este caso sale a la plataforma Ghost. Aplica a todos los escenarios.
    // * C: crear. Esta caso crea un nuevo POST en la plataforma Ghost.
    // * M: modificar. Este caso de uso aplica para modificacion de POST que no se hayan publicado.
    // * MP: modificar. Este caso de uso aplica para modificacion de POST que ya se hayan publicado.
    // * P: publicar. Este caso de uso publica un POST en la plataforma Ghost.
    // * E: Eliminar. Este caso de uso elimina un POST en la plataforma Ghost.

    // Algunos escenarios requieren tareas previas para alistar el sistema Ghost para ejecutar el escenario de pruebas,
    // a estas actividades se les definió como : precondicion
    // De igual manera algunos escenarios requieren tareas posteriores para dejar el sistema Ghost igual que antes de aplicar 
    // el escenario de pruebas, a estas actividades se les definió como : postcondicion

    // ESCENARIO DE PRUEBA 1: LC 
    await escenario01(page);
    await postcondicion(page);

    // ESCENARIO DE PRUEBA 2: LM
    await precondicion(page);
    await escenario02(page);
    await postcondicion(page);

    // ESCENARIO DE PRUEBA 3: LP
    await precondicion(page);
    await escenario03(page);
    await postcondicion(page);

    // ESCENARIO DE PRUEBA 4: LE
    await precondicion(page);
    await escenario04(page);

    // ESCENARIO DE PRUEBA 5: LCM
    await escenario05(page);
    await postcondicion(page);
    
    // ESCENARIO DE PRUEBA 6: LCP
    await escenario06(page);
    await postcondicion(page);

    // ESCENARIO DE PRUEBA 7: LCE
    await escenario07(page);

    // ESCENARIO DE PRUEBA 8: LME 
    await precondicion(page);
    await escenario08(page);

    // ESCENARIO DE PRUEBA 9: LMP 
    await precondicion(page);
    await escenario09(page);
    await postcondicion(page);

    // ESCENARIO DE PRUEBA 10: LMC 
    await precondicion(page);
    await escenario10(page);
    await postcondicion(page);
    await postcondicion(page);

    // ESCENARIO DE PRUEBA 11: LPE
    await precondicion(page);
    await escenario11(page);

    // ESCENARIO DE PRUEBA 12: LPM
    await precondicion(page);
    await escenario12(page);
    await postcondicion(page);

    // ESCENARIO DE PRUEBA 13: LMPE
    await precondicion(page);
    await escenario13(page);

    // ESCENARIO DE PRUEBA 14: LMCE
    await precondicion(page);
    await escenario14(page);
    await postcondicion(page);
    
    // ESCENARIO DE PRUEBA 15: LCMP
    await escenario15(page);
    await postcondicion(page);

    // ESCENARIO DE PRUEBA 16: LPME
    await precondicion(page);
    await escenario16(page);
    
    // ESCENARIO DE PRUEBA 17: LMCP
    await precondicion(page);
    await escenario17(page);
    await postcondicion(page);
    await postcondicion(page);

    // ESCENARIO DE PRUEBA 18: LCPM
    await escenario18(page);
    await postcondicion(page);

    // ESCENARIO DE PRUEBA 19: LCPE
    await escenario19(page);

    // ESCENARIO DE PRUEBA 20: LCPME
    await escenario20(page);
    
    await browser.close();
    return;
})().catch(e=>console.log(eu+e));

//------------------------------------------------------------------------------------------------------

async function escenario01(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 01: LCO  <<<<< ') 
    eu = 'EP01-LCO-01';
    await login(page, eu);
    eu = 'EP01-LCO-02';
    await crear(page, eu);
    eu = 'EP01-LCO-03';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario02(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 02: LMO  <<<<< ')
    eu = 'EP02-LMO-01';
    await login(page, eu);
    eu = 'EP02-LMO-02';
    await modificar(page, eu);
    eu = 'EP02-LMO-03';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario03(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 03: LPO  <<<<< ')
    eu = 'EP03-LPO-01';
    await login(page, eu);
    eu = 'EP03-LPO-02';
    await publicar(page, eu);
    eu = 'EP03-LPO-03';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario04(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 04: LEO  <<<<< ')
    eu = 'EP04-LEO-01';
    await login(page, eu);
    eu = 'EP04-LEO-02';
    await eliminar(page, eu);
    eu = 'EP04-LEO-03';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario05(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 05: LCPO  <<<<< ')
    eu = 'EP05-LCPO-01';
    await login(page, eu);
    eu = 'EP05-LCPO-02';
    await crear(page, eu);
    eu = 'EP05-LCPO-03';
    await publicar(page, eu);
    eu = 'EP05-LCPO-04';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario06(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 06: LCMO  <<<<< ')
    eu = 'EP06-LCMO-01';
    await login(page, eu);
    eu = 'EP06-LCMO-02';
    await crear(page, eu);
    eu = 'EP06-LCMO-03';
    await modificar(page, eu);
    eu = 'EP06-LCMO-04';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario07(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 07: LCEO  <<<<< ')
    eu = 'EP07-LCEO-01';
    await login(page, eu);
    eu = 'EP07-LCEO-02';
    await crear(page, eu);
    eu = 'EP07-LCEO-03';
    await eliminar(page, eu);
    eu = 'EP07-LCEO-04';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario08(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 08: LMEO   <<<<< ')
    eu = 'EP08-LMEO-01';
    await login(page, eu);
    eu = 'EP08-LMEO-02';
    await modificar(page, eu);
    eu = 'EP08-LMEO-03';
    await eliminar(page, eu);
    eu = 'EP08-LMEO-04';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario09(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 09: LMPO  <<<<< ')
    eu = 'EP09-LMPO-01';
    await login(page, eu);
    eu = 'EP09-LMPO-02';
    await modificar(page, eu);
    eu = 'EP09-LMPO-03';
    await publicar(page, eu);
    eu = 'EP09-LMPO-04';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario10(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 10: LMCO  <<<<< ')
    eu = 'EP10-LMCO-01';
    await login(page, eu);
    eu = 'EP10-LMCO-02';
    await modificar(page, eu);
    eu = 'EP10-LMCO-03';
    await crear(page, eu);
    eu = 'EP10-LMCO-04';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario11(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 11: LPEO  <<<<< ')
    eu = 'EP11-LPEO-01';
    await login(page, eu);
    eu = 'EP11-LPEO-02';
    await publicar(page, eu);
    eu = 'EP11-LPEO-03';
    await eliminar(page, eu);
    eu = 'EP11-LPEO-04';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario12(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 12: LPMO  <<<<< ')
    eu = 'EP12-LPMO-01';
    await login(page, eu);
    eu = 'EP12-LPMO-02';
    await publicar(page, eu);
    eu = 'EP12-LPMO-03';
    await modificar_publicado(page, eu);
    eu = 'EP12-LPMO-04';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario13(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 13: LMPEO  <<<<< ')
    eu = 'EP13-LMPEO-01';
    await login(page, eu);
    eu = 'EP13-LMPEO-02';
    await modificar(page, eu);
    eu = 'EP13-LMPEO-03';
    await publicar(page, eu);
    eu = 'EP13-LMPEO-04';
    await eliminar(page, eu);
    eu = 'EP13-LMPEO-05';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario14(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 14: LMCEO  <<<<< ')
    eu = 'EP14-LMCEO-01';
    await login(page, eu);
    eu = 'EP14-LMCEO-02';
    await modificar(page, eu);
    eu = 'EP14-LMCEO-03';
    await crear(page, eu);
    eu = 'EP14-LMCEO-04';
    await eliminar(page, eu);
    eu = 'EP14-LMCEO-05';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario15(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 15: LCMPO  <<<<< ')
    eu = 'EP15-LCMPO-01';
    await login(page, eu);
    eu = 'EP15-LCMPO-02';
    await crear(page, eu);
    eu = 'EP15-LCMPO-03';
    await modificar(page, eu);
    eu = 'EP15-LCMPO-04';
    await publicar(page, eu);
    eu = 'EP15-LCMPO-05';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario16(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 16: LPMEO  <<<<< ')
    eu = 'EP16-LPMEO-01';
    await login(page, eu);
    eu = 'EP16-LPMEO-02';
    await publicar(page, eu);
    eu = 'EP16-LPMEO-03';
    await modificar(page, eu);
    eu = 'EP16-LPMEO-04';
    await eliminar(page, eu);
    eu = 'EP16-LPMEO-05';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario17(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 17: LMCPO  <<<<< ')
    eu = 'EP17-LMCPO-01';
    await login(page, eu);
    eu = 'EP17-LMCPO-02';
    await modificar(page, eu);
    eu = 'EP17-LMCPO-03';
    await crear(page, eu);
    eu = 'EP17-LMCPO-04';
    await publicar(page, eu);
    eu = 'EP17-LMCPO-05';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario18(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 18: LCPMO  <<<<< ')
    eu = 'EP18-LCPMO-01';
    await login(page, eu);
    eu = 'EP18-LCPMO-02';
    await crear(page, eu);
    eu = 'EP18-LCPMO-03';
    await publicar(page, eu);
    eu = 'EP18-LCPMO-04';
    await modificar_publicado(page, eu);
    eu = 'EP18-LCPMO-05';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario19(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 19: LCPEO  <<<<< ')
    eu = 'EP19-LCPEO-01';
    await login(page, eu);
    eu = 'EP19-LCPEO-02';
    await crear(page, eu);
    eu = 'EP19-LCPEO-03';
    await publicar(page, eu);
    eu = 'EP19-LCPEO-04';
    await eliminar(page, eu);
    eu = 'EP19-LCPEO-05';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario20(page) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 20: LCPMEO  <<<<< ')
    eu = 'EP20-LCPMEO-01';
    await login(page, eu);
    eu = 'EP20-LCPMEO-02';
    await crear(page, eu);
    eu = 'EP20-LCPMEO-03';
    await publicar(page, eu);
    eu = 'EP20-LCPMEO-04';
    await modificar_publicado(page, eu);
    eu = 'EP20-LCPMEO-05';
    await eliminar(page, eu);
    eu = 'EP20-LCPMEO-06';
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

async function precondicion(page) {
    // Tareas previas necesarias para poder ejecutar el caso de prueba
    // Crea un post como base para el caso de prueba
    console.log(' >>>>> PRECONDICION  <<<<< ')
    eu = 'PRE';
    await login(page, eu);
    await crear(page, eu);
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function postcondicion(page) {
    // Tareas posteriores necesarias para dejar el sistema en el mismo estado inicial luego de aplicar 
    // un escenario de pruebas.
    console.log(' >>>>> POSTCONDICION  <<<<< ')
    eu = 'POS';
    await login(page, eu);
    await eliminar(page, eu);
    await logout(page, eu);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function publicar(page, eu) {
    //Accede a la página general de administracion
    await page.goto('http://localhost:2368/ghost/#/site');
    await new Promise(r => setTimeout(r, 4000));
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: './images/'+eu+'-publicar-01.png'})

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://localhost:2368/ghost/#/posts');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: './images/'+eu+'-publicar-02.png'})
    
    //Hace clic en el primer posts 
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: './images/'+eu+'-publicar-03.png'})

    //Hace clic en el boton de Publish para que muestre el boton de publicar el post
    await page.click('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger')
    await new Promise(r => setTimeout(r, 1000));
    console.log(eu+' : Clic activar el formulario de publicar el nuevo post')
    await page.screenshot({path: './images/'+eu+'-publicar-04.png'})

    //Hace clic en el boton de Publish para que publique el nuevo post 
    await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    await new Promise(r => setTimeout(r, 3000));
    console.log(eu+' : Clic publicar el nuevo post')
    await page.screenshot({path: './images/'+eu+'-publicar-05.png'})

    //Guarda el POSTS modificado y regresa a la pagina de administracion
    await page.click('a.blue.link.fw4.flex.items-center.ember-view')
    await new Promise(r => setTimeout(r, 10000));
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: './images/'+eu+'-publicar-06.png'})
}

//------------------------------------------------------------------------------------------------------

async function modificar_publicado(page, eu) {
    //Accede a la página general de administracion
    await page.goto('http://localhost:2368/ghost/#/site');
    await new Promise(r => setTimeout(r, 4000));
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: './images/'+eu+'-modificar-01.png'})

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://localhost:2368/ghost/#/posts');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: './images/'+eu+'-modificar-02.png'})
    
    //Hace clic en el primer posts 
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: './images/'+eu+'-modificar-03.png'})

    //Modifica el titulo del post
    await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', ' - MODIFICADO LUEGO DE PUBLICADO');
    console.log(eu+' : Realizado proceso de la modificacion del titulo del POST')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:'./images/'+eu+'-modificar-04.png'})
    
    //Hace clic en el boton de Update para que muestre el boton de actualizar el post
    await page.click('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger')
    await new Promise(r => setTimeout(r, 1000));
    console.log(eu+' : Clic activar el formulario de actualizar el post')
    await page.screenshot({path: './images/'+eu+'-modificar-04.png'})

    //Hace clic en el boton de Update para modificar el post 
    await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    await new Promise(r => setTimeout(r, 3000));
    console.log(eu+' : Clic actualizar el post')
    await page.screenshot({path: './images/'+eu+'-publicar-05.png'})

    //Guarda el POSTS modificado y regresa a la pagina de administracion
    await page.click('a.blue.link.fw4.flex.items-center.ember-view')
    await new Promise(r => setTimeout(r, 10000));
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: './images/'+eu+'-publicar-06.png'})
}

//------------------------------------------------------------------------------------------------------

async function modificar(page, eu) {
    //Accede a la página general de administracion
    await page.goto('http://localhost:2368/ghost/#/site');
    await new Promise(r => setTimeout(r, 4000));
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: './images/'+eu+'-modificar-01.png'})

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://localhost:2368/ghost/#/posts');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: './images/'+eu+'-modificar-02.png'})
    
    //Hace clic en el primer posts 
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: './images/'+eu+'-modificar-03.png'})

    //Modifica el titulo del post
    await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', ' - MODIFICADO');
    console.log(eu+' : Realizado proceso de la modificacion del titulo del POST')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:'./images/'+eu+'-modificar-04.png'})

    //Guarda el POSTS modificado y regresa a la pagina de administracion
    await page.click('a.blue.link.fw4.flex.items-center.ember-view')
    await new Promise(r => setTimeout(r, 10000));
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: './images/'+eu+'-modificar-05.png'})
}

//------------------------------------------------------------------------------------------------------

async function eliminar(page, eu) {
    //Accede a la página general de administracion
    await page.goto('http://localhost:2368/ghost/#/site');
    await new Promise(r => setTimeout(r, 4000));
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: './images/'+eu+'-eliminar-01.png'})

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://localhost:2368/ghost/#/posts');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: './images/'+eu+'-eliminar-02.png'})
    
    //Hace clic en el primer posts 
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: './images/'+eu+'-eliminar-03.png'})

    //Hace clic en el boton de opciones para que active el boton de eliminar 
    await page.click('button.post-settings')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en el boton de configuraciones del post')
    await page.screenshot({path: './images/'+eu+'-eliminar-04.png'})

    //Hace clic en el boton de eliminar 
    await page.click('[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en el boton de eliminar post')
    await page.screenshot({path: './images/'+eu+'-eliminar-05.png'})

    //Hace clic en el boton de confirmacion de eliminacion y regresa a la pagina de listado de post
    await page.click('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en el boton de confirmacion de eliminar post')
    await page.screenshot({path: './images/'+eu+'-eliminar-06.png'})
}

//------------------------------------------------------------------------------------------------------

async function crear(page, eu) {
    //Accede a la página general de administracion
    await page.goto('http://localhost:2368/ghost/#/site');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: './images/'+eu+'-crear-01.png'})

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://localhost:2368/ghost/#/posts');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: './images/'+eu+'-crear-02.png'})

    //Hace clic en el boton de New Posts para cargar la pagina de creacion de posts 
    await page.click('a.ember-view.gh-btn.gh-btn-green')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a nuevo post')
    await page.screenshot({path: './images/'+eu+'-crear-03.png'})

    //Escribe el titulo del post
    await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'titulo de prueba');
    console.log(eu+' : Realizado proceso de llenado del titulo del POST')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:'./images/'+eu+'-crear-04.png'})

    //Crea el nuevo POSTS 
    await page.click('a.blue.link.fw4.flex.items-center.ember-view')
    await new Promise(r => setTimeout(r, 10000));
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: './images/'+eu+'-crear-05.png'})

    //Regresa a la pagina de administracion 
    await page.click('a.blue.link.fw4.flex.items-center.ember-view')
    await new Promise(r => setTimeout(r, 5000));
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion')
    await page.screenshot({path: './images/'+eu+'-crear-06.png'})
}
//------------------------------------------------------------------------------------------------------

async function login(page, eu) {
    //Accede a la página de login
    await page.goto('http://localhost:2368/ghost/#/signin');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Página de login cargada')
    await page.screenshot({path: './images/'+eu+'-login-01.png'})

    //Llena los campos del formulario con datos correctos
    await page.type('input[name="identification"]', 's.salinasv@uniandes.edu.co');
    await page.type('input[name="password"]', 'Hk194ftxw5');
    console.log(eu+' : Datos validos de logeo')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:'./images/'+eu+'-login-02.png'})

    //Hace clic en el boton Sign y pasa a la pagina de post
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view')
    console.log(eu+' : Realizado proceso de logeo')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:'./images/'+eu+'-login-03.png'})
}

//------------------------------------------------------------------------------------------------------

async function logout(page, eu) {
    //Accede a la página de logout
    await page.goto('http://localhost:2368/ghost/#/signout');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Salida del sistema')
    await page.screenshot({path: './images/'+eu+'-logout-01.png'})
}

//------------------------------------------------------------------------------------------------------
