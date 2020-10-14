const usersPage = require('../../src/pages/users.page')
const rolesPage = require('../../src/pages/roles.page')
const homePage = require('../../src/pages/home.page')
const groupsPage = require('../../src/pages/groups.page')
const loginPage = require('../../src/pages/login.page')
const policyPage = require('../../src/pages/policy.page')
const allowedDomainsPage = require('../../src/pages/allowed-domains.page')
const systemSettingsPage = require('../../src/pages/system-settings.page')
const relayEndpointsPage = require('../../src/pages/relay-endpoints.page')
const env = require('../../credentials')

module.exports = function () {
  return actor({

    onLoginPage: function () {
      this.amOnPage('https://qa1.curlywurly.me')
      this.wait(5)
    },

    enterValidCredential: function()
    {
      loginPage.loginWith(env.qa.email, env.qa.password)
      this.wait(5)

    },

    enterInvalidPassword: function()
    {
      loginPage.loginWith(env.qa.email, data.qa.inValidPassword)
      this.wait(5)
    },

    login: function () {
      this.amOnPage('https://qa1.curlywurly.me')
      loginPage.loginWith(env.qa.email, env.qa.password)
      this.wait(5)
    },

    loginAs: function (email, password) {
      this.amOnPage('https://qa1.curlywurly.me')
      loginPage.loginWith(email, password)
      this.seeElement(homePage.sections.menu)
    },

    logout: function () {
      homePage.clickAccountToggle();
      homePage.clickLogout();
    },

    getId: function (length = 6) {
      return Math.random().toString(20).substr(2, length)
    },
    
    goToPasswordResetPage: function () {
      this.click(loginPage.clickForgotPasswordLink());
    },

    selectTenant: function (tenant){
        homePage.openTenantList();
        homePage.selectTenant(tenant);
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
      homePage.clickConfiguration();
      allowedDomainsPage.clickAllowedDomainTab();
    },

    goToRelayEndpoints: function () {
      homePage.clickConfiguration();
      relayEndpointsPage.clickRelayEndpointTab();
    },

    goToSystemSettings: function () {
      homePage.clickConfiguration();
      systemSettingsPage.goToSettings();
    },


  });
}