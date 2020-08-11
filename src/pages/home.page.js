const {
  I
} = inject();

module.exports = {

  //Locators   

  fields: {

  },
  buttons: {
    accountPopupToggle: `button[id='accountPopupToggle']`,
    logoutBtn: `a[class*='log-out-button']`,
  },
  sections: {
    menu: '#mainMenu',
  },
  links: {
    transactionLog: `a[class*='transaction-log-link']`,
    fileReleaseRequests: `a[class*='file-release-link']`,
    policies: `a[class*='policies-link']`,
    configuration: `a[class*='config-link']`,
    users: '#mainMenu > .nav > ul > li > .users-link'
  },
  lists: {
    tenants: `div[class="tenant-menu-icon"]`
  },


  //Methods
  /*
   * MenuLinks
   * ***************************************************************
   */
  async clickTransactionLog() {
    const element = this.transactionLogLink;
    I.click(element);
  },

  async clickFileReleaseRequests() {
    const element = this.fileReleaseRequestsLink;
    I.click(element);
  },

  async clickPolicy() {
    const element = this.policiesLink;
    I.click(element);
  },

  async clickConfiguration() {
    const element = this.configurationLink;
    I.click(element);
  },
  async clickUsers() {
    const element = this.getUsersLink();
    I.click(element);
  },

  /*
   * TenantList
   * ***************************************************************
   */
  async getTenant(tenant) {
    return ("//button[contains(text(),'" + tenant + "')]")

  },
  async openTenantList() {
    const element = this.lists.tenants;
    I.click(element);
  },

  async selectTenant(tenant) {
    const element = this.getTenant(tenant);
    I.click(element);
  },

  async getTenantName() {
    I.waitForPageLoad()
    I.grabTextFrom(this.lists.tenants)

  },

  async selectRequiredTenant(tenant) {
    openTenantList()
    selectTenant(tenant)
  },







}