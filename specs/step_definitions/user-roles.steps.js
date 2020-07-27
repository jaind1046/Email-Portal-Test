///<reference path="./steps.d.ts" />
var assert = require('assert')
const faker = require('faker');

const {
    I,
    rolesPage,
    homePage, usersPage,env
} = inject();

const roleId = I.getId();

Given('I am logged in as required tenant', () => {
    I.login();
    I.wait(5)
    I.selectTenant(env.qa.tenantName);
});

When('I add a new role with required settings', () => {
    rolesPage.clickAddBtn();
    rolesPage.setRoleDisplayName(roleId);
    rolesPage.clickApproveFileReleaseToggle();
    rolesPage.clickSaveRoleButton();
}); 

When('I select and delete a pre-existing role', () => {
    I.wait(5)
    //pause();
    //I.click("//button[contains(., 'dej8fg')]")[0]
    //I.click(rolesPage.getRoleLink('dej8fg'));
    rolesPage.selectRole('fb0e26')
    //I.click(`//button[@class='list-item-delete-button tooltip-title']`)[0];
    rolesPage.clickDelete();
    rolesPage.clickDeleteRoleConfirmSave();
});

Then('the role is deleted', () => {
    I.dontSeeElement(rolesPage.getRoleLink(roleId))
});

When('I select and edit a pre-existing role', () => {
    rolesPage.selectRole(roleId);
    rolesPage.clickViewSystemConfiguration();
    rolesPage.clickSaveRoleButton();
});

Then('The new role is saved with the selected permission and appears in the roles column', () => {
    //pause();
   // I.seeElement(rolesPage.getRoleLink(roleId));
    //I.seeCheckboxIsChecked(rolesPage.getViewSystemConfigurationElement());
});

Given('I am on the users role page', () => {
    I.goToRoles();
});
