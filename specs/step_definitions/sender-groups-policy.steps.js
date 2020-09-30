///<reference path="./steps.d.ts" />
var     {assert,assertNull}         = require('assert')
const   {TestHelpers}               = require('./helpers/step_helpers')

const {
    I,
    policySgPage,
    env,
} = inject();

const senderGroupName               = env.qa.senderGroupName
const senderDomain                  = env.qa.senderDomain
const senderGroupEmail              = env.qa.senderGroupEmail
const senderGroupEmail              = env.qa.senderGroupEmail
const senderGroupPolicyName         = env.qa.senderGroupPolicyName
const invalidSenderGroupName        = env.qa.invalidSenderGroupName
const invalidSenderDomain           = env.qa.invalidSenderDomain
const invalidSenderGroupEmail       = env.qa.invalidSenderGroupEmail
const invalidSenderGroupEmail       = env.qa.invalidSenderGroupEmail
const invalidSenderGroupPolicyName  = env.qa.invalidSenderGroupPolicyName


/*****************************************
* Navigation
******************************************/

 Given('I am on the Policy Sender Groups draft page', () => {
    I.loginAs(env.qa.email, env.qa.password);
    I.wait(5)
    I.goToPolicySenderGroups();
    I.wait(5)
 });

 Given('I am on sender groups policy screen', () => {
    I.goToPolicySenderGroups();
    I.wait(5)
 });
 /*
 * AddNewSenderGroup & Domain steps
 * ***************************************************************
 */
 When('I add new sender group', () => {
    policySgPage.clickAddNewSenderGroupButton()
 });

 When('I fill a sender group name', () => {
    policySgPage.setSendergroupName(senderGroupName)
 });

 Then ('I get a new sender group name', () => {
    var senderGroup = policyRgPage.getSendergroupName()
    assertNotNull (senderGroup, "Sender Group name cannot be Null")
 });

 When('I add new sender domain', (senderDomain) => {
    policySgPage.clickAddSenderDomainButton(senderDomain)
 });

 When('I fill new sender domain name', () => {
    policySgPage.setDomainName(senderDomain)
 });

 Then ('I get a new sender group name', () => {
    var senderDomain = policyRgPage.getDomainName()
    assertNotNull (senderDomain, "Sender Domain name cannot be Null")
 });

 When('I click on add new sender mailbox', () => {
    policySgPage.clickAddSenderMailboxButton()
 });

 When('I set a new sender mailbox', () => {
    policySgPage.setMailBox(senderGroupEmail)
 });

 Then ('I can get the new sender mailbox', () => {
    var senderMailBox = policyRgPage.getMailBox()
    assertNotNull (senderMailBox, "Sender MailBox name cannot be Null")
 });

 When('I click on save sender policy', () => {
    policySgPage.clickSaveSpButton()
 });

 When('I select the default group', () => {
    // Not on UI currently
 });

 When('I add a new Sender group with a valid Mail box name and save', () => {
    I.goToPolicySenderGroups();
    policySgPage.clickAddNewSenderGroupButton();
    policySgPage.setSendergroupName(senderGroupName);
    policySgPage.setDomainName(senderDomain)
    policySgPage.clickAddSenderMailboxButton()
    policySgPage.setMailBox(senderGroupEmail)
    policySgPage.clickSaveSpButton()
 });

Then ('the new sender group is saved and the success notification: Sender Group has been saved is displayed', () => {
    // Not visible on UI for now
 });

When ('I click Delete', () => {
    // Not visible on UI for now
 });


When('I click Publish', () => {
    policySgPage.clickPublishPolicy()
 });

Then('The Current Policy is updated with the new one to the current date and time', () => {
    // Should be common for sender and receiver groups.
    // NA currently on UI not able to draft and  save policy
 });

When('I add a new Sender group with a valid Domain name', () => {
    I.goToPolicySenderGroups();
    policySgPage.clickAddNewSenderGroupButton();
    policySgPage.setSendergroupName(senderGroupName);
    policySgPage.setDomainName(senderDomain)
 });


When('I add a new Sender group with all valid values', () => {
    I.goToPolicySenderGroups();
    policySgPage.clickAddNewSenderGroupButton();
    policySgPage.setSendergroupName(senderGroupName);
    policySgPage.setDomainName(senderDomain)
    policySgPage.setMailBox(senderGroupEmail)
 });

When('I add a new Sender group with a invalid Domain name', () => {
    I.goToPolicySenderGroups();
    policySgPage.clickAddNewSenderGroupButton();
    policySgPage.setSendergroupName(senderGroupName);
    policySgPage.setDomainName(invalidSenderDomain)
    policySgPage.setMailBox(senderGroupEmail)
 });

When('I add a new Sender group with a invalid mail id', () => {
    I.goToPolicySenderGroups();
    policySgPage.clickAddNewSenderGroupButton();
    policySgPage.setSendergroupName(senderGroupName);
    policySgPage.setDomainName(senderDomain)
    policySgPage.setMailBox(invalidSenderGroupEmail)
 });

When('I add a new Sender group with a invalid group name', () => {
    I.goToPolicySenderGroups();
    policySgPage.clickAddNewSenderGroupButton();
    policySgPage.setSendergroupName(invalidSenderGroupName);
    policySgPage.setDomainName(senderDomain)
    policySgPage.setMailBox(senderGroupEmail)
 });

Then('The new sender group is saved', () => {
    // Should be common for sender and receiver groups.
    // NA currently on UI not able to draft and  save policy
 });

Then('An error pops up for invalid email', () => {
    // Should be common for sender and receiver groups.
    // NA currently on UI not able to draft and  save policy
 });

Then('An error pops up for invalid domain', () => {
    // Should be common for sender and receiver groups.
    // NA currently on UI not able to draft and  save policy
 });

Then('An error pops up for invalid group name', () => {
    // Should be common for sender and receiver groups.
    // NA currently on UI not able to draft and  save policy
 });


Then('the Previous Policy is updated to the previous current policy', () => {
    // Should be common for sender and receiver groups.
    // NA currently on UI not able to draft and  save policy
 });

Then ('The warning is displayed as: The Default Sender Group cannot be deleted', () => {
    // Not visible on UI for now
 });

 Then ('I can save the sender policy', () => {
    // Not visible on UI for now
 });
 /*
 * DeleteCancelSpButton steps
 * ***************************************************************
 */
  When('I click on delete sender policy', () => {
    policySgPage.clickDeleteSpButton()
  });

  When('I delete a new Sender group with a valid Domain name', () => {
    I.goToPolicySenderGroups();
    policySgPage.clickDeleteSpButton()
  });

  Then ('I can choose a policy to delete', () => {
    //    the input field chosen delete does not exist
  });

  When('I click on cancel sender policy', () => {
    policySgPage.clickCancelSpButton()
  });

  Then ('I can not choose a policy to delete', () => {
    //    the input field chosen delete does not exist
  });

  When('I click on cancel sender policy after delete', () => {
    policySgPage.clickCancelOnDeleteSenderGroupConfirm()
  });

   // Cancel Deletion
   When('Click cancel', () => {
    // NA on ui
  });

  Then ('I can not delete chosen policy to delete', () => {
    //    the input field chosen delete does not exist
  });

  Then ('The sender group is not deleted and there are no changes', () => {
    //    the input field chosen delete does not exist
  });

  When('I click on save sender policy after delete', () => {
    policySgPage.clickSaveOnDeleteSenderGroupConfirm()
  });

  Then('The sender group is deleted and the success notification: Sender Group has been deleted is displayed', () => {
    // NA on UI for now
  });

  Then ('I can permanently delete the chosen sender policy', () => {
    //NA on ui for now
  });