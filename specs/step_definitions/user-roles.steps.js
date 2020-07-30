///<reference path="./steps.d.ts" />
var assert = require('assert')
let expect = require('chai').expect;
const faker = require('faker');

const {
    I,
    rolesPage,
    homePage, usersPage,env
} = inject();

const uuid = faker.random.uuid();
const roleId = "Role"+uuid;

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
    rolesPage.selectRole(roleId)
    rolesPage.clickDelete();
    rolesPage.clickDeleteRoleConfirmSave();
});

Then('the role is deleted', () => {
    I.dontSeeElement("//button[contains(., '" + roleId + "')]")[0];
});

When('I select and edit a pre-existing role', () => {
    rolesPage.selectRole('Role1af6ca64-3eac-459e-a5c8-d87d74d33e66');
    rolesPage.clickViewSystemConfiguration();
    rolesPage.clickSaveRoleButton();
});
Then('The role is updated with the selected permission', () => {
    I.wait(5)
    //TODO//I.seeCheckboxIsChecked(`label[for='permission-toggle-26a8129e-c533-4d09-b961-465c8a8b35de']`)
});

Then('The new role is saved and appears in the roles column', () => {
    I.wait(5)
    I.seeElement("//button[contains(., '" + roleId + "')]")[0];
});
Given('I am on the users role page', () => {
    I.goToRoles();
});
