///<reference path="./steps.d.ts" />
var     {assert,assertNull}         = require('assert')
const   {TestHelpers}               = require('./helpers/step_helpers')

const {
    I,
    relayEndpointsPage,
    env,
} = inject();

 const relayEndpointInput            = env.qa.relayEndpointInput
 const relayPort                     = env.qa.relayPort
 const invalidRelayEndpointInput     = env.qa.invalidRelayEndpointInput
 const invalidRelayPort              = env.qa.invalidRelayPort

/*****************************************
* Navigation
******************************************/

 Given('I am on the relay endpoints page', () => {
    I.loginAs(env.qa.email, env.qa.password);
    I.wait(5)
    I.goToRelayEndpoints();
    I.wait(5)
 });

 Given('I am on relay end points screen', () => {
    I.goToRelayEndpoints(); // the function will be made later
    I.wait(5)
 });

/* Adding Relay Endpoints */

 When('I click on relay endpoints tab', () => {
    relayEndpointsPage.clickRelayEndpointTab()
 });

 Then ('I can view all relay endpoints', () => {
//    Not on UI currently
 });

 When('I click on import relay endpoints', () => {
    relayEndpointsPage.clickImportRelayEndpoints()
 });

 Then ('I can import new relay endpoint', () => {
//    Not on UI currently
 });

 When('I fill valid relay endpoint input value and valid port value', () => {
    relayEndpointsPage.setRelayEndpointInput(relayEndpointInput)
    relayEndpointsPage.setPort0(relayPort)
 });

 Then ('I get a relay endpoint input value and port value', () => {
    var relayEndpoint = relayEndpointsPage.getRelayEndpointInput()
    var relayPortValue = relayEndpointsPage.getPort0()
    assertNotNull (relayEndpoint, "Relay Endpoint input name cannot be Null")
    assertNotNull (relayPortValue, "Relay Port value cannot be Null")
 });

 When('I fill invalid relay endpoint input value', () => {
    relayEndpointsPage.setRelayEndpointInput(invalidRelayEndpointInput)
    relayEndpointsPage.setPort0(relayPort)
 });

 Then ('I get an error message popup', () => {
    var invalidRelayEndpointInput = relayEndpointsPage.getRelayEndpointInput()
    var relayPortValue = relayEndpointsPage.getPort0()
    assertNotNull (invalidRelayEndpointInput, " Invalid Relay Endpoint input name")
 });

 When('I fill invalid relay port value', () => {
    relayEndpointsPage.setRelayEndpointInput(relayEndpointInput)
    relayEndpointsPage.setPort0(invalidRelayPort)
 });

 Then ('I get an error message popup', () => {
    var relayEndpointInput = relayEndpointsPage.getRelayEndpointInput()
    var invalidRelayPortValue = relayEndpointsPage.getPort0()
    assertNotNull (invalidRelayPortValue, " Invalid Relay Port input value")
 });

 When('I click on add Relay Endpoint', () => {
    relayEndpointsPage.clickAddEndpointBtn()
 });

 When('I click on save relay Endpoint', () => {
    relayEndpointsPage.clickSaveRelayEndpointsBtn()
 });

 Then ('I can save the relay endpoint with valid name and port value', () => {
//    Not on UI currently
 });

 When('I click on cancel save relay endpoints', () => {
    relayEndpointsPage.clickSaveRelayEndpointsBtn()
 });

 Then ('The information filled gets cancelled', () => {
//    Not on UI currently
 });

 /*
  Delete Button
  */
  When('I click on delete relay endpoint', () => {
    relayEndpointsPage.clickDeleteBtn()
 });

 Then ('The message popups for successful deletion', () => {
//    Not on UI currently
 });

 /*
 Edit Relay endpoints
 */

 When('I click on edit Relay Endpoint', () => {
    relayEndpointsPage.setRelayEndpointInput(relayEndpointInput)
 });

 Then ('I can input the edited Relay Endpoint', () => {
    var relayEndpointInput = relayEndpointsPage.getRelayEndpointInput()
    assertNotNull (relayEndpointInput, "Relay Endpoint input name cannot be Null")
 });

 When('I click on edit Relay Port Value', () => {
    relayEndpointsPage.setPort0(relayPort)
 });

 Then ('I can input the edited Relay Endpoint', () => {
    var  relayPortValue = relayEndpointsPage.getPort0()
    assertNotNull (relayPortValue, "Relay Port value cannot be Null")
 });
