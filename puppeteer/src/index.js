/*
# Pruebas Automatizadas - Proyecto Semana 5

## Integrantes: 

* Santiago Alejandro Salinas Vargas
* Oscar Javier Jiménez Mejía

## Funcionalidades bajo pruebas:

Las funcionalidades bajo prueba estan alrededor de los POSTS en la plataforma Ghost. 
Se ha identificado cada funcionalidad por una letra, que servirá para explicar la lógica de los escenarios de pruebas:

* L: login. Esta funcionalidad corresponde al ingreso a la plataforma Ghost. Aplica a todos los escenarios.
* O: logout. Esta funcionalidad corresponde a la salida de a la plataforma Ghost. Aplica a todos los escenarios.
* C: crear. Esta funcionalidad corresponde a la creación de un nuevo POST en la plataforma Ghost.
* M: modificar. Esta funcionalidad corresponde a la modificacion de un POST que no se hayan publicado.
* MP: modificar. Esta funcionalidad corresponde a la modificacion de un POST que ya se hayan publicado (actualización).
* P: publicar. Esta funcionalidad corresponde a la publicación de un POST en la plataforma Ghost.
* E: Eliminar. Esta funcionalidad corresponde a la eliminación de un POST en la plataforma Ghost.

## Escenarios de pruebas:

Los excenarios de pruebas combinan en diferente orden las funcionalidades en prueba para poder determinar posibles fallos generados en su interacción.
Algunos escenarios requieren tareas previas para alistar el sistema Ghost para ejecutarlo, a estas actividades se les definió como : precondicion.
De igual manera algunos escenarios requieren tareas posteriores para dejar el sistema Ghost igual que antes de aplicar el escenario de pruebas, a estas actividades se les definió como : postcondicion

* Escenario de prueba 1: LCO
Este escenario combina las funcionalidades Logueo y Creación de un POST. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 2: LMO
Este escenario combina las funcionalidades Logueo y Modificación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 3: LPO
Este escenario combina las funcionalidades Logueo y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 4: LEO
Este escenario combina las funcionalidades Logueo y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 5: LCMO
Este escenario combina las funcionalidades Logueo, Creación y Modificación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 6: LCPO
Este escenario combina las funcionalidades Logueo, Creación y Publicación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 7: LCEO
Este escenario combina las funcionalidades Logueo, Creación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 8: LMEO
Este escenario combina las funcionalidades Logueo, Modificación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 9: LMPO
Este escenario combina las funcionalidades Logueo, Modificación y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 10: LMCO 
Este escenario combina las funcionalidades Logueo, Modificación y Creación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 11: LPEO
Este escenario combina las funcionalidades Logueo, Publicación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 12: LPMO
Este escenario combina las funcionalidades Logueo, Publicación y Modificación (actualización) de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 13: LMPEO
Este escenario combina las funcionalidades Logueo, Modificación, Publicación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 14: LMCEO
Este escenario combina las funcionalidades Logueo, Modificación, Creación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 15: LCMPO
Este escenario combina las funcionalidades Logueo, Creación, Modificación y Publicación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 16: LPMEO
Este escenario combina las funcionalidades Logueo, Publicación, Modificación (actualización) y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 17: LMCPO
Este escenario combina las funcionalidades Logueo, Modificación, Creación y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 18: LCPMO
Este escenario combina las funcionalidades Logueo, Creación, Publicación y Modificación (actualización) de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 19: LCPEO
Este escenario combina las funcionalidades Logueo, Creación, Publicación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 20: LCPMEO
Este escenario combina las funcionalidades Logueo, Creación, Publicación, Modificación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

*/

const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 })

    // definicion de variables relacionadas a la ubicacion de la plataforma Ghost
    host_ghost = 'localhost'
    puerto_ghost = '2368'


    // ESCENARIO DE PRUEBA 1: LCO
    await escenario01(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 2: LMO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario02(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 3: LPO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario03(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 4: LEO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario04(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 5: LCMO
    await escenario05(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);
    
    // ESCENARIO DE PRUEBA 6: LCPO
    await escenario06(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 7: LCEO
    await escenario07(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 8: LMEO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario08(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 9: LMPO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario09(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 10: LMCO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario10(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 11: LPEO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario11(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 12: LPMO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario12(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 13: LMPEO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario13(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 14: LMCEO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario14(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);
    
    // ESCENARIO DE PRUEBA 15: LCMPO
    await escenario15(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 16: LPMEO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario16(page, host_ghost, puerto_ghost);
    
    // ESCENARIO DE PRUEBA 17: LMCPO
    await precondicion(page, host_ghost, puerto_ghost);
    await escenario17(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 18: LCPMO
    await escenario18(page, host_ghost, puerto_ghost);
    await postcondicion(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 19: LCPEO
    await escenario19(page, host_ghost, puerto_ghost);

    // ESCENARIO DE PRUEBA 20: LCPMEO
    await escenario20(page, host_ghost, puerto_ghost);
    
    await browser.close();
    return;
})().catch(e=>console.log(eu+e));

//------------------------------------------------------------------------------------------------------

async function escenario01(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 01: LCO  <<<<< ') 
    eu = 'EP01-LCO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP01-LCO-02';
    await crear(page, eu, host_ghost, puerto_ghost);
    eu = 'EP01-LCO-03';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario02(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 02: LMO  <<<<< ')
    eu = 'EP02-LMO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP02-LMO-02';
    await modificar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP02-LMO-03';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario03(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 03: LPO  <<<<< ')
    eu = 'EP03-LPO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP03-LPO-02';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP03-LPO-03';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario04(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 04: LEO  <<<<< ')
    eu = 'EP04-LEO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP04-LEO-02';
    await eliminar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP04-LEO-03';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario05(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 05: LCPO  <<<<< ')
    eu = 'EP05-LCPO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP05-LCPO-02';
    await crear(page, eu, host_ghost, puerto_ghost);
    eu = 'EP05-LCPO-03';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP05-LCPO-04';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario06(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 06: LCMO  <<<<< ')
    eu = 'EP06-LCMO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP06-LCMO-02';
    await crear(page, eu, host_ghost, puerto_ghost);
    eu = 'EP06-LCMO-03';
    await modificar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP06-LCMO-04';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario07(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 07: LCEO  <<<<< ')
    eu = 'EP07-LCEO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP07-LCEO-02';
    await crear(page, eu, host_ghost, puerto_ghost);
    eu = 'EP07-LCEO-03';
    await eliminar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP07-LCEO-04';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario08(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 08: LMEO   <<<<< ')
    eu = 'EP08-LMEO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP08-LMEO-02';
    await modificar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP08-LMEO-03';
    await eliminar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP08-LMEO-04';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario09(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 09: LMPO  <<<<< ')
    eu = 'EP09-LMPO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP09-LMPO-02';
    await modificar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP09-LMPO-03';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP09-LMPO-04';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario10(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 10: LMCO  <<<<< ')
    eu = 'EP10-LMCO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP10-LMCO-02';
    await modificar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP10-LMCO-03';
    await crear(page, eu, host_ghost, puerto_ghost);
    eu = 'EP10-LMCO-04';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario11(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 11: LPEO  <<<<< ')
    eu = 'EP11-LPEO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP11-LPEO-02';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP11-LPEO-03';
    await eliminar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP11-LPEO-04';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario12(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 12: LPMO  <<<<< ')
    eu = 'EP12-LPMO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP12-LPMO-02';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP12-LPMO-03';
    await modificar_publicado(page, eu, host_ghost, puerto_ghost);
    eu = 'EP12-LPMO-04';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario13(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 13: LMPEO  <<<<< ')
    eu = 'EP13-LMPEO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP13-LMPEO-02';
    await modificar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP13-LMPEO-03';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP13-LMPEO-04';
    await eliminar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP13-LMPEO-05';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario14(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 14: LMCEO  <<<<< ')
    eu = 'EP14-LMCEO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP14-LMCEO-02';
    await modificar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP14-LMCEO-03';
    await crear(page, eu, host_ghost, puerto_ghost);
    eu = 'EP14-LMCEO-04';
    await eliminar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP14-LMCEO-05';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario15(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 15: LCMPO  <<<<< ')
    eu = 'EP15-LCMPO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP15-LCMPO-02';
    await crear(page, eu, host_ghost, puerto_ghost);
    eu = 'EP15-LCMPO-03';
    await modificar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP15-LCMPO-04';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP15-LCMPO-05';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario16(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 16: LPMEO  <<<<< ')
    eu = 'EP16-LPMEO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP16-LPMEO-02';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP16-LPMEO-03';
    await modificar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP16-LPMEO-04';
    await eliminar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP16-LPMEO-05';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario17(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 17: LMCPO  <<<<< ')
    eu = 'EP17-LMCPO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP17-LMCPO-02';
    await modificar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP17-LMCPO-03';
    await crear(page, eu, host_ghost, puerto_ghost);
    eu = 'EP17-LMCPO-04';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP17-LMCPO-05';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario18(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 18: LCPMO  <<<<< ')
    eu = 'EP18-LCPMO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP18-LCPMO-02';
    await crear(page, eu, host_ghost, puerto_ghost);
    eu = 'EP18-LCPMO-03';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP18-LCPMO-04';
    await modificar_publicado(page, eu, host_ghost, puerto_ghost);
    eu = 'EP18-LCPMO-05';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario19(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 19: LCPEO  <<<<< ')
    eu = 'EP19-LCPEO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP19-LCPEO-02';
    await crear(page, eu, host_ghost, puerto_ghost);
    eu = 'EP19-LCPEO-03';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP19-LCPEO-04';
    await eliminar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP19-LCPEO-05';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function escenario20(page, host_ghost, puerto_ghost) {
    console.log(' >>>>> ESCENARIO DE PRUEBA 20: LCPMEO  <<<<< ')
    eu = 'EP20-LCPMEO-01';
    await login(page, eu, host_ghost, puerto_ghost);
    eu = 'EP20-LCPMEO-02';
    await crear(page, eu, host_ghost, puerto_ghost);
    eu = 'EP20-LCPMEO-03';
    await publicar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP20-LCPMEO-04';
    await modificar_publicado(page, eu, host_ghost, puerto_ghost);
    eu = 'EP20-LCPMEO-05';
    await eliminar(page, eu, host_ghost, puerto_ghost);
    eu = 'EP20-LCPMEO-06';
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

async function precondicion(page, host_ghost, puerto_ghost) {
    // Tareas previas necesarias para poder ejecutar el caso de prueba
    // Crea un post como base para el caso de prueba
    console.log(' >>>>> PRECONDICION  <<<<< ')
    eu = 'PRE';
    await login(page, eu, host_ghost, puerto_ghost);
    await crear(page, eu, host_ghost, puerto_ghost);
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function postcondicion(page, host_ghost, puerto_ghost) {
    // Tareas posteriores necesarias para dejar el sistema en el mismo estado inicial luego de aplicar 
    // un escenario de pruebas.
    console.log(' >>>>> POSTCONDICION  <<<<< ')
    eu = 'POS';
    await login(page, eu, host_ghost, puerto_ghost);
    await eliminar(page, eu, host_ghost, puerto_ghost);
    await logout(page, eu, host_ghost, puerto_ghost);
    console.log(' ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
}

//------------------------------------------------------------------------------------------------------

async function publicar(page, eu, host_ghost, puerto_ghost) {
    //Accede a la página general de administracion
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/site');
    await new Promise(r => setTimeout(r, 4000));
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: './images/'+eu+'-publicar-01.png'})

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/posts');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: './images/'+eu+'-publicar-02.png'})
    
    //Hace clic en el primer posts 
    await page.waitForSelector('a.ember-view.permalink.gh-list-data.gh-post-list-title');
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: './images/'+eu+'-publicar-03.png'})

    //Hace clic en el boton de Publish para que muestre el boton de publicar el post
    await page.waitForSelector('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger');
    await page.click('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger')
    await new Promise(r => setTimeout(r, 1000));
    console.log(eu+' : Clic activar el formulario de publicar el nuevo post')
    await page.screenshot({path: './images/'+eu+'-publicar-04.png'})

    //Hace clic en el boton de Publish para que publique el nuevo post 
    await page.waitForSelector('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    await new Promise(r => setTimeout(r, 3000));
    console.log(eu+' : Clic publicar el nuevo post')
    await page.screenshot({path: './images/'+eu+'-publicar-05.png'})

    //Guarda el POSTS modificado y regresa a la pagina de administracion
    await page.waitForSelector('a.blue.link.fw4.flex.items-center.ember-view');
    await page.click('a.blue.link.fw4.flex.items-center.ember-view')
    await new Promise(r => setTimeout(r, 10000));
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: './images/'+eu+'-publicar-06.png'})
}

//------------------------------------------------------------------------------------------------------

async function modificar_publicado(page, eu, host_ghost, puerto_ghost) {
    //Accede a la página general de administracion
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/site');
    await new Promise(r => setTimeout(r, 4000));
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: './images/'+eu+'-modificar-01.png'})

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/posts');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: './images/'+eu+'-modificar-02.png'})
    
    //Hace clic en el primer posts 
    await page.waitForSelector('a.ember-view.permalink.gh-list-data.gh-post-list-title');
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: './images/'+eu+'-modificar-03.png'})

    //Modifica el titulo del post
    await page.waitForSelector('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', ' - MODIFICADO LUEGO DE PUBLICADO');
    console.log(eu+' : Realizado proceso de la modificacion del titulo del POST')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:'./images/'+eu+'-modificar-04.png'})
    
    //Hace clic en el boton de Update para que muestre el boton de actualizar el post
    await page.waitForSelector('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger');
    await page.click('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger')
    await new Promise(r => setTimeout(r, 1000));
    console.log(eu+' : Clic activar el formulario de actualizar el post')
    await page.screenshot({path: './images/'+eu+'-modificar-04.png'})

    //Hace clic en el boton de Update para modificar el post 
    await page.waitForSelector('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    await new Promise(r => setTimeout(r, 3000));
    console.log(eu+' : Clic actualizar el post')
    await page.screenshot({path: './images/'+eu+'-publicar-05.png'})

    //Guarda el POSTS modificado y regresa a la pagina de administracion
    await page.waitForSelector('a.blue.link.fw4.flex.items-center.ember-view');
    await page.click('a.blue.link.fw4.flex.items-center.ember-view')
    await new Promise(r => setTimeout(r, 10000));
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: './images/'+eu+'-publicar-06.png'})
}

//------------------------------------------------------------------------------------------------------

async function modificar(page, eu, host_ghost, puerto_ghost) {
    //Accede a la página general de administracion
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/site');
    await new Promise(r => setTimeout(r, 4000));
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: './images/'+eu+'-modificar-01.png'})

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/posts');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: './images/'+eu+'-modificar-02.png'})
    
    //Hace clic en el primer posts 
    await page.waitForSelector('a.ember-view.permalink.gh-list-data.gh-post-list-title');
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: './images/'+eu+'-modificar-03.png'})

    //Modifica el titulo del post
    await page.waitForSelector('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', ' - MODIFICADO');
    console.log(eu+' : Realizado proceso de la modificacion del titulo del POST')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:'./images/'+eu+'-modificar-04.png'})

    //Guarda el POSTS modificado y regresa a la pagina de administracion
    await page.waitForSelector('a.blue.link.fw4.flex.items-center.ember-view');
    await page.click('a.blue.link.fw4.flex.items-center.ember-view')
    await new Promise(r => setTimeout(r, 10000));
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: './images/'+eu+'-modificar-05.png'})
}

//------------------------------------------------------------------------------------------------------

async function eliminar(page, eu, host_ghost, puerto_ghost) {
    //Accede a la página general de administracion
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/site');
    await new Promise(r => setTimeout(r, 4000));
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: './images/'+eu+'-eliminar-01.png'})

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/posts');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: './images/'+eu+'-eliminar-02.png'})
    
    //Hace clic en el primer posts 
    await page.waitForSelector('a.ember-view.permalink.gh-list-data.gh-post-list-title');
    await page.click('a.ember-view.permalink.gh-list-data.gh-post-list-title')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder al primer post')
    await page.screenshot({path: './images/'+eu+'-eliminar-03.png'})

    //Hace clic en el boton de opciones para que active el boton de eliminar 
    await page.waitForSelector('button.post-settings');
    await page.click('button.post-settings')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en el boton de configuraciones del post')
    await page.screenshot({path: './images/'+eu+'-eliminar-04.png'})

    //Hace clic en el boton de eliminar 
    await page.waitForSelector('[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
    await page.click('[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en el boton de eliminar post')
    await page.screenshot({path: './images/'+eu+'-eliminar-05.png'})

    //Hace clic en el boton de confirmacion de eliminacion y regresa a la pagina de listado de post
    await page.waitForSelector('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    await page.click('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en el boton de confirmacion de eliminar post')
    await page.screenshot({path: './images/'+eu+'-eliminar-06.png'})
}

//------------------------------------------------------------------------------------------------------

async function crear(page, eu, host_ghost, puerto_ghost) {
    //Accede a la página general de administracion
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/site');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Página general de administracion cargada')
    await page.screenshot({path: './images/'+eu+'-crear-01.png'})

    //Hace clic en el boton de Posts para cargar la lista de posts 
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/posts');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a lista post')
    await page.screenshot({path: './images/'+eu+'-crear-02.png'})

    //Hace clic en el boton de New Posts para cargar la pagina de creacion de posts 
    await page.waitForSelector('a.ember-view.gh-btn.gh-btn-green');
    await page.click('a.ember-view.gh-btn.gh-btn-green')
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Clic en acceder a nuevo post')
    await page.screenshot({path: './images/'+eu+'-crear-03.png'})

    //Escribe el titulo del post
    await page.waitForSelector('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    await page.type('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'titulo de prueba');
    console.log(eu+' : Realizado proceso de llenado del titulo del POST')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:'./images/'+eu+'-crear-04.png'})

    //Crea el nuevo POSTS 
    await page.waitForSelector('a.blue.link.fw4.flex.items-center.ember-view');
    await page.click('a.blue.link.fw4.flex.items-center.ember-view')
    await new Promise(r => setTimeout(r, 10000));
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion para que guarde los cambios')
    await page.screenshot({path: './images/'+eu+'-crear-05.png'})

    //Regresa a la pagina de administracion 
    await page.waitForSelector('a.blue.link.fw4.flex.items-center.ember-view');
    await page.click('a.blue.link.fw4.flex.items-center.ember-view')
    await new Promise(r => setTimeout(r, 5000));
    console.log(eu+' : Clic en regresar a la pagina pricipal de administracion')
    await page.screenshot({path: './images/'+eu+'-crear-06.png'})
}
//------------------------------------------------------------------------------------------------------

async function login(page, eu, host_ghost, puerto_ghost) {
    //Accede a la página de login
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/signin');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Página de login cargada')
    await page.screenshot({path: './images/'+eu+'-login-01.png'})

    //Llena los campos del formulario con datos correctos
    await page.waitForSelector('input[name="identification"]');
    await page.type('input[name="identification"]', 's.salinasv@uniandes.edu.co');
    await page.waitForSelector('input[name="password"]');
    await page.type('input[name="password"]', 'Hk194ftxw5');
    console.log(eu+' : Datos validos de logeo')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:'./images/'+eu+'-login-02.png'})

    //Hace clic en el boton Sign y pasa a la pagina de post
    await page.waitForSelector('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view');
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view')
    console.log(eu+' : Realizado proceso de logeo')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path:'./images/'+eu+'-login-03.png'})
}

//------------------------------------------------------------------------------------------------------

async function logout(page, eu, host_ghost, puerto_ghost) {
    //Accede a la página de logout
    await page.goto('http://'+host_ghost+':'+puerto_ghost+'/ghost/#/signout');
    await new Promise(r => setTimeout(r, 2000));
    console.log(eu+' : Salida del sistema')
    await page.screenshot({path: './images/'+eu+'-logout-01.png'})
}

//------------------------------------------------------------------------------------------------------
