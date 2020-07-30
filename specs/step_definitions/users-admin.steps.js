///<reference path="./steps.d.ts" />
var assert = require('assert')
let expect = require('chai').expect;
const faker = require('faker');

const {
    I,
    rolesPage,
    homePage,
    usersPage,
    env
} = inject();

const uuid = faker.random.uuid();
const userName = "User" + uuid;
const userEmail = userName + "@gw.com";

Given('I am logged in as required tenant', () => {
  I.login();
  I.selectTenant(env.qa.tenantName);
  I.wait(5);
});

Given('I am on the users screen', () => {
    usersPage.clickUsersTab();
    I.goToUsers();
});

When('I add a new user with a valid email address', () => {
    userGroup="view config";
    usersPage.clickAddUserBtn();
    usersPage.setNewUserName(userName);
    usersPage.setNewUserEmail(userEmail);
    usersPage.selectNewUserGroup(userGroup);
    usersPage.clickSaveUsersButton();  
    });

Then('the new user record is saved', () => {
    //TODO
});
