const {
  I
} = inject();

module.exports = {

  menu: '#mainMenu',
  transactionLogLink: `a[class*='transaction-log-link']`,
  fileReleaseRequestsLink: `a[class*='file-release-link']`,
  policiesLink: `a[class*='policies-link']`,
  accountPopupToggle :`button[id='accountPopupToggle']`,
  logoutBtn: `a[class*='log-out-button']`,
  configurationLink: `a[class*='config-link']`,


async clickTransactionLog() {
  const element = await this.transactionLogLink;
  I.click(element);
},

 async clickFileReleaseRequests() {
   const element = await this.fileReleaseRequestsLink;
   I.click(element);
 },

 async clickPolicy() {
   const element = await this.policiesLink;
  I.click(element);
 },

 async clickConfiguration() {
   const element = await this.configurationLink;
   I.click(element);
 },


  /*
   * TenantList
   * ***************************************************************
   */
  async getCurrentTenantList() {
    return (`div[class="tenant-menu-icon"]`);
  },

  async getTenant(tenant) {
    return ("//button[contains(text(),'"+tenant+"')]") 
   
  },
  async openTenantList() {
    const element = await this.getCurrentTenantList();
    I.click(element);
  },

  async selectTenant(tenant) {
    const element = await this.getTenant(tenant);
    I.click(element);
  },

async getTenantName() {
  I.waitForPageLoad()
  I.grabTextFrom(this.getCurrentTenantList())

},

async selectRequiredTenant(tenant) {
   openTenantList()
   selectTenant(tenant)
  },

/*
 * Users
 * ***************************************************************
 */
  async getUsersLink() {
    return ('#mainMenu > .nav > ul > li > .users-link');
  },
  async clickUsers() {
    const element = await this.getUsersLink();
    I.click(element);
  },

  /*
 * Policy
 * ***************************************************************
 */
  async getPolicyLink() {
    return (`a[class*='policies-link']`);
  },
  async clickPolicyLink() {
    const element = await this.getPolicyLink();
    I.click(element);
  },

async goToConfigurations() {
    I.click(`a[class*='config-link']`)
  },

  async goToSettings() {
    I.click(`a[class*='config-link']`)
    I.wait(5);
    I.click(`button[id='tab-l1-3']`)
  },






}