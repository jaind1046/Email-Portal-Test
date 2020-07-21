const usersPage = require('./pages/users.page')
const rolesPage = require('./pages/roles.page')
const homePage = require('./pages/home.page')

module.exports = function () {
  return actor({

    login: function () {
      this.amOnPage('https://qa1.curlywurly.me')
      this.fillField('Email', 'nhode@glasswallsolutions.com');
      this.fillField('Password', 'Password1!');
      this.click('Log In');
    },

    loginAs: function (email, password) {
      this.amOnPage('https://qa1.curlywurly.me')
      this.fillField('Email', email);
      this.fillField('Password', password);
      this.click('Log In');

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
      this.click('');
      this.click('');
    },

    goToUsers: function () {
      this.click('');
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