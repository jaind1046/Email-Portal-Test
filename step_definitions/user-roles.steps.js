///<reference path="./steps.d.ts" />
var assert = require('assert')
//const faker = require('faker');

const {
    I,
    rolesPage,
    homePage, usersPage,
} = inject();

const roleId = I.getId();
const tenant = "Nadege Tenant 5"

Given('I am logged in as the required tenant', () => {
    I.login();
    I.wait(5)
    homePage.openTenantList()
    I.wait(5);
    homePage.selectTenant(tenant);
});

Given('I am on the users role page', () => {
    I.goToRoles();
});

When('I add a new role with required settings', () => {
    rolesPage.clickAddBtn();
    rolesPage.setRoleDisplayName(roleId);
    rolesPage.clickApproveFileReleaseToggle();
    rolesPage.clickSaveRoleButton();
});

Then('The new role is saved and appears in the roles column', () => {
//     I.see(roleId);

 });

When('I select and delete a pre-existing role', () => {
    rolesPage.selectRole('j18ghb');
    rolesPage.clickDelete('j18ghb');
    rolesPage.clickDeleteRoleConfirmSave();
});

Then('the role is deleted', () => {

});

Then('a message is displayed saying changes have been saved', () => {

});

When('I select and edit a pre-existing role', () => {
    rolesPage.selectRole(roleId);
    rolesPage.clickViewSystemConfiguration();
    rolesPage.clickSaveRoleButton();
});

Then('the role is saved', () => {
    pause();
    I.seeCheckboxIsChecked(rolesPage.getViewSystemConfigurationElement());
});


Given('I do not have permissions to access the users tab', () => {

});

When('I log in', () => {

});

Then('The users tab is unavailable', () => {

});