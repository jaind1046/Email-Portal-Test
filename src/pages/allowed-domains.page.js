const {
    I
} = inject();

module.exports = {


/*
 * AllowedDomainsInput
 * ***************************************************************
 */

async getAllowedDomainsInputElement() {
    return (`(//input[@id='allowedDomainsInput'])[1]`)[0];
},

async getAllowedDomainsInput() {
    const element = await this.getAllowedDomainsInputElement();
    return await I.grabAttributeFrom(element, jsonValue());
    
},

async setAllowedDomainsInput(value) {
    const element = await this.getAllowedDomainsInputElement();
    I.fillField(element, value);
},

/*
 * ImportAllowedDomains
 * ***************************************************************
 */
async getImportAllowedDomainsElement() {
    return (`(//button[@id='importAllowedDomains'])[1]`)[0];
},

async clickImportAllowedDomains() {
    const element = await this.getImportAllowedDomainsElement();
    I.click(element);
},

/*
 * AddAllowedDomain
 * ***************************************************************
 */

async getAddAllowedDomainElement() {
    return (`(//button[@id='addAllowedDomain'])[1]`)[0];
},

async clickAddAllowedDomain() {
    const element = await this.getAddAllowedDomainElement();
    I.click(element);
},

/*
 * DomainElement
 * ***************************************************************
 */

async getDomain0Element() {
    return (`input[name='domain[0]']`);
},

async getDomain0() {
    const element = await this.getDomain0Element();
    return await I.grabAttributeFrom(element, jsonValue());
},

async setDomain0(value) {
    const element = await this.getDomain0Element();
    I.fillField(element, value);
},

/*
 * Button17
 * ***************************************************************
 */

async getButton17Element() {
    return (`tr[class*='allowed-domain-row'] > td:nth-of-type(3) > button`);
},

async clickButton17() {
    const element = await this.getButton17Element();
    I.click(element);
},

/*
 * CancelSaveAllowedDomainsB
 * ***************************************************************
 */

async getCancelSaveAllowedDomainsBElement() {
    return (`button[id='cancelSaveAllowedDomainsButton']`);
},

async clickCancelSaveAllowedDomainsB() {
    const element = await this.getCancelSaveAllowedDomainsBElement();
    I.click(element);
},

/*
 * SaveAllowedDomainsButton
 * ***************************************************************
 */

async getSaveAllowedDomainsButtonElement() {
    return (`button[id='saveAllowedDomainsButton']`);
},

async clickSaveAllowedDomainsButton() {
    const element = await this.getSaveAllowedDomainsButtonElement();
    I.click(element);
}



}