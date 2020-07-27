const usersPage = require('../../src/pages/users.page')
const rolesPage = require('../../src/pages/roles.page')
const homePage = require('../../src/pages/home.page')
const groupsPage = require('../../src/pages/groups.page')
const loginPage = require('../../src/pages/login.page')
const policyPage = require('../../src/pages/policy.page')
const allowedDomainsPage = require('../../src/pages/allowed-domains.page')
const relayEndpointsPage = require('../../src/pages/relay-endpoints.page')
const env = require('../../credentials')

module.exports = function () {
  return actor({

    login: function () {
      this.amOnPage('https://qa1.curlywurly.me')
      loginPage.loginWith(env.qa.email, env.qa.password)
    },

    loginAs: function (email, password) {
      this.amOnPage('https://qa1.curlywurly.me')
      loginPage.loginWith(email, password)
      this.seeElement(homePage.menu)
    },

    logout: function () {
      this.click(homePage.accountPopupToggle);
      this.click(homePage.logoutBtn);
    },

    getId: function (length = 6) {
      return Math.random().toString(20).substr(2, length)
    },
    
    goToPasswordResetPage: function () {
      this.click(loginPage.clickForgotPasswordLink());
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
      usersPage.clickUsersTab();
    },

    goToTransactionLog: function () {
      homePage.clickTransactionLog();
    },

    goToFileReleaseRequestPage: function () {
      homePage.clickFileReleaseRequests();
    },

    goToDraftPolicyProcessingRules: function () {
      homePage.clickPolicy();
      policyPage.clickDraftPolicyTab();
      policyPage.clickDraftProcessingRules();
    },

    goToPolicySenderGroups: function () {
      homePage.clickPolicy();
      policyPage.clickDraftPolicyTab();
      policyPage.clickDraftSenderGroups();
    },

    goToPolicyReceiverGroups: function () {
      homePage.clickPolicy();
      policyPage.clickDraftPolicyTab();
      policyPage.clickDraftReceiverGroups();
    },
    goToContentManagementPolicy: function () {
      homePage.clickPolicy();
      policyPage.clickDraftPolicyTab();
      policyPage.clickDraftContentManagementPolicies();
    },

    goToAllowedDomains: function () {
      homePage.goToConfigurations();
      this.click(allowedDomainsPage.allowedDomainsTab);
    },

    goToRelayEndpoints: function () {
      homePage.goToConfigurations();
      relayEndpointsPage.clickRelayEndpointTab();
    },

    goToSystemSettings: function (homePage) {
      homePage.goToSettings();
    },


  });
}