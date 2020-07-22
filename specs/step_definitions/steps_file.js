const usersPage = require('../../src/pages/users.page')
const rolesPage = require('../../src/pages/roles.page')
const homePage = require('../../src/pages/home.page')
const groupsPage = require('../../src/pages/groups.page')
const loginPage = require('../../src/pages/login.page')
//const env = require('../credentials')

module.exports = function () {
  return actor({

    login: function () {
      this.amOnPage('https://qa1.curlywurly.me')
      loginPage.loginWith(env.qa.email, env.qa.password)
    },

    loginAs: function (email, password) {
      this.amOnPage('https://qa1.curlywurly.me')
      loginPage.loginWith(email, password)
    },

    logout: function () {
      this.click(`button[id='accountPopupToggle']`);
      this.click(`a[class*='log-out-button']`);
    },

    getId: function (length = 6) {
      return Math.random().toString(20).substr(2, length)
    },
    
    goToPasswordResetPage: function () {
      this.click(`a[id='forgotPasswordLink']`);
    },

    selectTenant: function (tenant){
        homePage.openTenantList()
        homePage.selectTenant(tenant)
        I.wait(5);
    },

    goToRoles: function () {
      homePage.clickUsers();
      rolesPage.clickRolesTab();
    },

    goToGroups: function () {
      homePage.clickUsers();
      groupsPage.clickGroupsTab();
    },

    goToUsers: function () {
      homePage.clickUsers();
      this.click('');
    },

    goToTransactionLog: function () {
      this.click('');
      this.click('');
    },

    goToFileReleaseRequestPage: function () {
      this.click('');
      this.click('');
    },

    goToPolicyProcessingRules: function () {
      this.click('');
      this.click('');
    },

    goToPolicySenderGroups: function () {
      this.click('');
      this.click('');
    },

    goToPolicyReceiverGroups: function () {
      this.click('');
      this.click('');
    },
    goToContentManagementPolicy: function () {
      this.click('');
      this.click('');
    },

    goToAllowedDomains: function () {
      this.click('');
      this.click('');
    },

    goToRelayEndpoints: function () {
      this.click('');
      this.click('');
    },

    goToSystemSettings: function (homePage) {
      homePage.goToSettings();
      
      // this.click('');
      // this.click('');
    },


  });
}