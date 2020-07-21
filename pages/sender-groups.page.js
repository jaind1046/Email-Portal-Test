module.exports = {




    /*
     * AddNewSenderGroupButton
     * ***************************************************************
     */

    async getAddNewSenderGroupButtonElement() {
        return (`button[id='addNewSenderGroupButton']`);
    },

    async clickAddNewSenderGroupButton() {
        const element = await this.getAddNewSenderGroupButtonElement();
        I.click(element);
    },

    /*
     * AddSenderDomainButton
     * ***************************************************************
     */

    async getAddSenderDomainButtonElement() {
        return (`button[id='AddSenderDomainButton']`);
    },

    async clickAddSenderDomainButton() {
        const element = await this.getAddSenderDomainButtonElement();
        I.click(element);
    },

    /*
     * AddSenderMailboxButton
     * ***************************************************************
     */

    async getAddSenderMailboxButtonElement() {
        return (`button[id='AddSenderMailboxButton']`);
    },

    async clickAddSenderMailboxButton() {
        const element = await this.getAddSenderMailboxButtonElement();
        I.click(element);
    },

    /*
     * DeleteSpButton
     * ***************************************************************
     */

    async getDeleteSpButtonElement() {
        return (`button[id='deleteSPButton']`);
    },

    async clickDeleteSpButton() {
        const element = await this.getDeleteSpButtonElement();
        I.click(element);
    },

    /*
     * CancelSpButton
     * ***************************************************************
     */

    async getCancelSpButtonElement() {
        return (`button[id='cancelSPButton']`);
    },

    async clickCancelSpButton() {
        const element = await this.getCancelSpButtonElement();
        I.click(element);
    },

    /*
     * SaveSpButton
     * ***************************************************************
     */

    async getSaveSpButtonElement() {
        return (`button[id='saveSPButton']`);
    },

    async clickSaveSpButton() {
        const element = await this.getSaveSpButtonElement();
        I.click(element);
    },

    /*
     * DeleteSenderGroupConfirmC
     * ***************************************************************
     */

    async getDeleteSenderGroupConfirmCElement() {
        return (`button[id='deleteSenderGroupConfirmCancel']`);
    },

    async clickDeleteSenderGroupConfirmC() {
        const element = await this.getDeleteSenderGroupConfirmCElement();
        I.click(element);
    },

    /*
     * DeleteSenderGroupConfirmS
     * ***************************************************************
     */

    async getDeleteSenderGroupConfirmSElement() {
        return (`button[id='deleteSenderGroupConfirmSave']`);
    },

    async clickDeleteSenderGroupConfirmS() {
        const element = await this.getDeleteSenderGroupConfirmSElement();
        I.click(element);
    },
    /*
     * Button30
     * ***************************************************************
     */

    async getButton30Element() {
        return (`section[id='policyTabSP-content'] > section:nth-of-type(1) > header > div:nth-of-type(1) > button`);
    },

    async clickButton30() {
        const element = await this.getButton30Element();
        I.click(element);
    },

}