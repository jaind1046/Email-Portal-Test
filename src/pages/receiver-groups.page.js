module.exports = {




    /*
     * PreviousReceiverGroups
     * ***************************************************************
     */

    async getPreviousReceiverGroupsElement() {
        return (`ul[class*='previous-tabs'] > li:nth-of-type(3) > button`);
    },

    async clickPreviousReceiverGroups() {
        const element = await this.getPreviousReceiverGroupsElement();
        I.click(element);
    },

    /*
     * AddNewReceiverGroupButton
     * ***************************************************************
     */

    async getAddNewReceiverGroupButtonElement() {
        return (`button[id='addNewReceiverGroupButton']`);
    },

    async clickAddNewReceiverGroupButton() {
        const element = await this.getAddNewReceiverGroupButtonElement();
        I.click(element);
    },

    /*
     * AddReceiverMailboxButton
     * ***************************************************************
     */

    async getAddReceiverMailboxButtonElement() {
        return (`button[id='AddReceiverMailboxButton']`);
    },

    async clickAddReceiverMailboxButton() {
        const element = await this.getAddReceiverMailboxButtonElement();
        I.click(element);
    },

    /*
     * DeleteRpButton
     * ***************************************************************
     */

    async getDeleteRpButtonElement() {
        return (`button[id='deleteRPButton']`);
    },

    async clickDeleteRpButton() {
        const element = await this.getDeleteRpButtonElement();
        I.click(element);
    },

    /*
     * CancelRpButton
     * ***************************************************************
     */

    async getCancelRpButtonElement() {
        return (`button[id='cancelRPButton']`);
    },

    async clickCancelRpButton() {
        const element = await this.getCancelRpButtonElement();
        I.click(element);
    },

    /*
     * SaveRpButton
     * ***************************************************************
     */

    async getSaveRpButtonElement() {
        return (`button[id='saveRPButton']`);
    },

    async clickSaveRpButton() {
        const element = await this.getSaveRpButtonElement();
        I.click(element);
    },

    /*
     * DeleteReceiverGroupConfir
     * ***************************************************************
     */

    async getDeleteReceiverGroupConfirElement() {
        return (`button[id='deleteReceiverGroupConfirmCancel']`);
    },

    async clickDeleteReceiverGroupConfir() {
        const element = await this.getDeleteReceiverGroupConfirElement();
        I.click(element);
    },

    /*
     * DeleteReceiverGroupConfir2
     * ***************************************************************
     */

    async getDeleteReceiverGroupConfir2Element() {
        return (`button[id='deleteReceiverGroupConfirmSave']`);
    },

    async clickDeleteReceiverGroupConfir2() {
        const element = await this.getDeleteReceiverGroupConfir2Element();
        I.click(element);
    },


}