const {
    I
} = inject();

module.exports = {

    //locators
    fields: {
        allowedDomainsInput: '#allowedDomainsInput',
        domainOne: `input[name='domain[1]']`
    },
    buttons: {
        allowedDomainsTab: `button[id='tab-l1-1']`,
        validatedDomainTick: `tr[class*='even'] > td:nth-of-type(2) > div`,
        importAllowedDomains: '#importAllowedDomains',
        addAllowedDomain: `#addAllowedDomain`,
        cancelSaveAllowedDomains: `button[id='cancelSaveAllowedDomainsButton']`,
        saveAllowedDomains: `button[id='saveAllowedDomainsButton']`,
        delete: `tr.allowed-domain-row.existing-allowed-domain.even > td:nth-child(3) > button`,
        revertDelete: `tr[class*='even'] > td:nth-of-type(3) > button`,
        configModalSaveButton: `button[id='configModalSaveButton']`,
        cancelConfigDeleteConfirm: `button[id='cancelConfigDeleteConfirm']`,
        configurationDeleteModalClose: `button[id='configurationDeleteModalClose']`
    },
    modal: {
        configurationDeleteModalContainer: `section[id='configurationDeleteModalContainer']`
    },


    //Methods

    /*
     * AllowedDomainsInput
     * ***************************************************************
     */
    async getAllowedDomainsValue() {
        const element = this.fields.allowedDomainsInput;
        return await I.grabAttributeFrom(element, jsonValue());
    },
    setAllowedDomainsInput(value) {
        const element = this.fields.allowedDomainsInput;
        I.fillField(element, value);
    },

    /*
     * ImportAllowedDomains
     * ***************************************************************
     */
    clickImportAllowedDomains() {
        const element = this.buttons.importAllowedDomains;
        I.click(element);
    },

    async attachDomainRecord(file) {
        await this.clickImportAllowedDomains();
        I.attachFile(await this.fields.allowedDomainsInput, file);
    },

    async uploadCsv(file) {
        await this.clickImportAllowedDomains();
        I.attachFile(this.fields.allowedDomainsInput, file);
        I.click(await this.buttons.saveAllowedDomains)
    },

    /*
     * AddAllowedDomain
     * ***************************************************************
     */

    clickAddAllowedDomain() {
        const element = this.buttons.addAllowedDomain;
        I.click(element);
    },

    clickAllowedDomainTab() {
        const element = this.buttons.allowedDomainsTab;
        I.click(element);
    },

    async getDomainOneValue() {
        const element = this.fields.domainOne;
        return await I.grabAttributeFrom(element, jsonValue());
    },

    setDomain(value) {
        const element = this.fields.domainOne;
        I.fillField(element, value);
    },

    /*
     * AllowedDomainsButtonSaving
     * ***************************************************************
     */
    clickCancelSaveAllowedDomains() {
        const element = this.buttons.cancelSaveAllowedDomains;
        I.click(element);
    },

    clickSaveAllowedDomainsButton() {
        const element = this.buttons.saveAllowedDomains;
        I.click(element);
    },

    /*
     * Deleting a domain
     * ***************************************************************
     */
    async clickDelete() {
        const element = this.buttons.delete;
        I.click(element);
    },

    async clickRevert() {
        const element = this.buttons.revertDelete;
        I.click(element);
    },

    /*
     * ConfigModal
     * ***************************************************************
     */
    async clickConfigModalSaveButton() {
        const element = this.buttons.configModalSaveButton;
        I.click(element);
    },

    async clickCancelConfigDeleteConfirm() {
        const element = this.buttons.cancelConfigDeleteConfirm;
        I.click(element);
    },

    async clickConfigurationDeleteModalClose() {
        const element = this.buttons.configurationDeleteModalClose;
        I.click(element);
    },


}