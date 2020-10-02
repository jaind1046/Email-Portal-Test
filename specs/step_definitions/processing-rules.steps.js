///<reference path="./steps.d.ts" />

 var     {assert,assertNull}         = require('assert')
 const   {TestHelpers}               = require('./helpers/step_helpers')

 const {
    I,
    policyPrPage,
    env,
 } = inject();

 const processRuleSender            = env.qa.sender
 const processRuleReceiver          = env.qa.receiver
 const processRuleCmp               = env.qa.cmp
 const processRuleNewSender         = env.qa.newSender


 Given('I am on the processing rules page', () => {
    I.loginAs(env.qa.email, env.qa.password);
    I.wait(5)
    I.goToProcessingRules();
    I.wait(5)
 });

 Given('I am on processing rules screen', () => {
    I.goToProcessingRules(); // the function will be made later
    I.wait(5)
 });
 /*
        Adding Processing Rule
 */
 When('I click on add processing rule', () => {
    policyPrPage.clickAddProcessingRuleButton()
 });

 Then ('I can start filling a processing rule', () => {
//    Not on UI currently
 });

 When('I fill sender, receiver and default content management for a processing rule', () => {
    policyPrPage.addProcessingRule(processRuleSender, processRuleReceiver, processRuleCmp)
 });

 Then ('I can get all the information for a processing rule', () => {
    var processSender, processReceiver, processContent = policyPrPage.getProcessingRule()
    assertNotNull (processSender, 'The sender group cannot be null')
    assertNotNull (processReceiver, 'The receiver group cannot be null')
    assertNotNull (processContent, 'The content management cannot be null')
 }

  /*
        Editing Processing Rule
 */

 When('I edit the sender for a processing rule and add new sender', () => {
    policyPrPage.editPrRule(processRuleSender, processRuleNewSender, processRuleReceiver, processRuleCmp)
 });

 Then ('I can get all the information of the edited processing rule', () => {
    var processSender, processReceiver, processContent = policyPrPage.getProcessingRule()
    assertNotNull (processSender, 'The sender group cannot be null')
 });

 When('I edit the receiver for a processing rule and add new receiver', () => {
//    Not on UI currently
 });

 Then ('I can get all the information of the edited processing rule', () => {
//    Not on UI currently
 });

 When('I edit the content for a processing rule and add new content', () => {
//    Not on UI currently
 });

 Then ('I can get all the information of the edited processing rule', () => {
//    Not on UI currently
 });

  /*
        Deleting Processing Rule
 */

 When('I click delete processing rule', () => {
    policyPrPage.clickDeleteProcessingRuleButton()
 });

 Then ('I can choose a processing rule to delete', () => {
//    Not on UI currently
 });

 When('I save changes and confirm to delete a processing rule', () => {
    policyPrPage.clickDeleteProcessingRuleButton()
 });

 Then ('I can see a notification that processing rules have been saved', () => {
//    Not on UI currently
 });

 When('I cancel changes and confirm not to delete a processing rule', () => {
    policyPrPage.clickCancelPrDeleteConfirm()
 });

 Then ('I cannot delete a processing rule', () => {
//    Not on UI currently
 });

 When('I click on processing modal save button', () => {
    policyPrPage.clickPrModalSaveButton()
 });

 Then ('I can save the modal', () => {
//    Not on UI currently
 });

 When('I click on processing modal delete', () => {
    policyPrPage.clickPrDeleteModalClose()
 });

 Then ('I can remove the modal from the screen', () => {
//    Not on UI currently
 });

