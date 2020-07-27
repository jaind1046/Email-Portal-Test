const {
    I
} = inject();

module.exports = {

    allowedDomainsTab: `button[id='tab-l1-1']`,
    validatedDomainTick: `tr[class*='even'] > td:nth-of-type(2) > div`,

/*
 * AllowedDomainsInput
 * ***************************************************************
 */
async getAllowedDomainsInput() {
    return ('#allowedDomainsInput');
},
async getAllowedDomainsValue() {
    const element = await this.getAllowedDomainsValue();
    return await I.grabAttributeFrom(element, jsonValue());
},
async setAllowedDomainsInput(value) {
    const element = await this.getAllowedDomainsInput();
    I.fillField(element, value);
},

/*
 * ImportAllowedDomains
 * ***************************************************************
 */
async getImportAllowedDomainsElement() {
    return '#importAllowedDomains';
},
async clickImportAllowedDomains() {
    const element = await this.getImportAllowedDomainsElement();
    I.click(element);
},

async attachDomainRecord() {
    await this.clickImportAllowedDomains();
    I.attachFile(await this.getAllowedDomainsInput(), './src/data/domain_1.csv');
},

async uploadCsv(){
    await this.clickImportAllowedDomains();
    I.attachFile(this.getAllowedDomainsInput(), './src/data/domain_1.csv');
    I.click(await this.getSaveAllowedDomainsButton())
},

/*
 * AddAllowedDomain
 * ***************************************************************
 */
async getAddAllowedDomainElement() {
    return (`#addAllowedDomain`);
},
async clickAddAllowedDomain() {
    const element = await this.getAddAllowedDomainElement();
    I.click(element);
},

/*
 * DomainElement
 * ***************************************************************
 */
async getDomainInput() {
    return (`input[name='domain[1]']`);
},

async getDomainValue() {
    const element = await this.getDomainInput();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setDomain(value) {
    const element = await this.getDomainInput();
    I.fillField(element, value);
},

/*
 * CancelSaveAllowedDomainsButton
 * ***************************************************************
 */
async getCancelSaveAllowedDomainsButton() {
    return (`button[id='cancelSaveAllowedDomainsButton']`);
},
async clickCancelSaveAllowedDomains() {
    const element = await this.getCancelSaveAllowedDomainsButton();
    I.click(element);
},

/*
 * SaveAllowedDomainsButton
 * ***************************************************************
 */
async getSaveAllowedDomainsButton() {
    return (`button[id='saveAllowedDomainsButton']`);
},
async clickSaveAllowedDomainsButton() {
    const element = await this.getSaveAllowedDomainsButton();
    I.click(element);
}



}