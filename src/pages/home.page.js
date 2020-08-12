const {
  I
} = inject();

module.exports = {

  //Locators   

  fields: {

  },
  buttons: {
    accountPopupToggle: `button[id='accountPopupToggle']`,
    logout: `a[class*='log-out-button']`,
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
    const element = this.links.transactionLog;
    I.click(element);
  },

  async clickFileReleaseRequests() {
    const element = this.links.fileReleaseRequests;
    I.click(element);
  },

  async clickPolicy() {
    const element = this.links.policies;
    I.click(element);
  },

  async clickConfiguration() {
    const element = this.links.configuration;
    I.click(element);
  },
  async clickUsers() {
    const element = this.links.users;
    I.click(element);
  },

  async clickLogout() {
    const element = this.buttons.logout;
    I.click(element);
  },

  async clickAccountToggle() {
    const element = this.buttons.accountPopupToggle;
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
    const element = await this.getTenant(tenant);
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