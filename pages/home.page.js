const {
  I
} = inject();

module.exports = {


  /*
   * TenantList
   * ***************************************************************
   */

  async getCurrentTenantList() {
    return (`div[class="tenant-menu-icon"]`);
  },

//data-tenant-id="425fa0c0-2e59-459c-8568-9936832c3b95"
//(`//button[contains(text(),'Nadege Tenant 5')]`)
//(`//button[data-tenant-id="425fa0c0-2e59-459c-8568-9936832c3b95"]`)

  async getTenant(tenant) {
    return ("//button[contains(text(),'"+tenant+"')]") //('#availableTenantsList > li:nth-child(4) > button')
   // (`//li[@data-tenant-id="425fa0c0-2e59-459c-8568-9936832c3b95"]`);
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