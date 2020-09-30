///<reference path="./steps.d.ts" />
const {
    I,
    receiverGroupsPage,
    env,
} = inject();

const receivers             = env.qa.receiverGroupEmails

/*****************************************
* Navigation
******************************************/

Given('I am logged into the policy receiver groups page', () => {
    I.loginAs(env.qa.email, env.qa.password);
    I.wait(5)
});

Given('I am on the Policy Receiver Groups draft page', () => {
    policyRgPage.clickDraftPolicy();
    I.wait(5)
});

Given('I am on policy receiver groups screen', () => {
    I.goToPolicyReceiverGroups();
    I.wait(5)
});

/*****************************************
* Scenarios
******************************************/
When('I have added or edited & saved a Receiver Group', () => {
    policyRgPage.clickAddNewReceiverGroupButton()
    policyRgPage.clickAddReceiverMailboxButton()
    policyRgPage.setEmailInput(receivers)
    policyRgPage.clickSaveRpButton()
 });

When('I select the default group', () => {
    // Cant see groups in portal for now.
 });

When('I click Publish', () => {
    policyRgPage.clickPublishPolicy()
 });

Then('The Current Policy is updated with the new one to the current date and time', () => {
    // Once portal saves, will add this
 });

Then('the Previous Policy is updated to the previous current policy', () => {
    // Once portal saves, will add this
 });

 When('I click on add new receiver group button', () => {
    policyRgPage.clickAddNewReceiverGroupButton()
 });

Then ('a new Policy Receiver Group is added', () => {
    // Cant see in portal for now
 });

When ('I select the receiver policy group', () => {
    // Cant see in portal for now
 });

 Then ('I get a popup to add receiver groups', () => {
    var result = policyRgPage.getEmailInput()
    assertNull(result,"Email input box was not visible or already had some value")
 });

 Then ('a new receiver mailbox group is created', () => {
    // Need to wait for portal
 });


 When('I click on add receiver mailbox button', () => {
    policyRgPage.clickAddReceiverMailboxButton()
 });

 When('I click on save receiver policy button', () => {
    policyRgPage.clickSaveRpButton()
 });

 Then ('The receiver policy gets saved', () => {
    // Need to wait for portal to get up. Currently it logs off on clicking policy
 });

 When('I click on delete receiver policy button', () => {
    policyRgPage.clickDeleteRpButton()
 });

 Then('The warning is displayed as: The Default Sender Group cannot be deleted', () => {
    // Need to wait for portal to give this working
 });

 Then('The group is removed permanently', () => {
    // Need to wait for portal to give this working
 });

 When('I click on confirm button for delete receiver', () => {
    policyRgPage.clickDeleteReceiverGroupConfirmCancel()
 });

 When ('I try deleting the default receiver policy', () => {
    var defaultPolicy = policyRgPage.clickDeleteRpButton()
 });

 Then ('The policy group is not deleted', (defaultPolicy) => {
    assertNotNull (defaultPolicy, "Default policy group was deleted")
 });

 Then ('I delete any receiver group except default receiver group', () => {
    var notDefaultPolicy = policyRgPage.clickDeleteRpButton()
    assertNotNull (notDefaultPolicy, "The receiver group was successfully deleted")
 });

 When('I click on confirm save button for delete receiver', () => {
    policyRgPage.clickDeleteReceiverGroupConfirmSave()
 });

 Then ('The receiver group list is updated', () => {
    // Need to wait for portal to get up. Currently it logs off on clicking policy
 });

 When('I click on delete mailbox button', () => {
    policyRgPage.clickDeleteMailBoxButton()
 });

 Then ('The existing mailbox gets deleted', () => {
    // Need to wait for portal to get up. Currently it logs off on clicking policy
 });

 When('I click on cancel mailbox button', () => {
    policyRgPage.clickCancelMailBoxButton()
 });

 Then ('The new mailbox gets deleted', () => {
    // Need to wait for portal to get up. Currently it logs off on clicking policy
 });

 When ('I fill a valid email in mailbox', (value) => {
    policyRgPage.setEmailInput(value)
 });


 When ('I fill an invalid email in mailbox', (value) => {
    policyRgPage.setEmailInput()
 });

 Then ('I get an empty value in email input box', (value) => {
    var value = policyRgPage.getEmailInput()
    assertNotNull (value, "Email Id was not null")
 });

 Then ('I get a valid email in mailbox', () => {
    var emailValue = policyRgPage.getMailInput()
    assertNotNull (emailValue, "Email Id was Null")
 });

 When ('I fill a invalid email in mail input box', (value) => {
    policyRgPage.setMailInput()
 });

 Then ('I get a null email in mailbox', () => {
    var emailValue = policyRgPage.getMailInput()
    assertNull (emailValue, "Email Id was not Null")
 });

 Then ('I get an error message alert', () => {
    // Alert element not found for now in portal
 });

 When ('I fill a policy option name input', (value) => {
    policyRgPage.setPolicyOptionNameInput()
 });

 Then ('I get a policy option name input', () => {
    var emailValue = policyRgPage.getEmailInput()
    assertNotNull (emailValue, "Policy option email input was null")
 });

