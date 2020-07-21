module.exports = {




    /*
     * AddNewContentManagementPo
     * ***************************************************************
     */

    async getAddNewContentManagementPoElement() {
        return (`button[id='addNewContentManagementPolicyButton']`);
    },

    async clickAddNewContentManagementPo() {
        const element = await this.getAddNewContentManagementPoElement();
        I.click(element);
    },

    /*
     * AddPolicyCustomGroup
     * ***************************************************************
     */

    async getAddPolicyCustomGroupElement() {
        return (`button[id='addPolicyCustomGroup']`);
    },

    async clickAddPolicyCustomGroup() {
        const element = await this.getAddPolicyCustomGroupElement();
        I.click(element);
    },

    /*
     * DeleteCmpButton
     * ***************************************************************
     */

    async getDeleteCmpButtonElement() {
        return (`button[id='deleteCMPButton']`);
    },

    async clickDeleteCmpButton() {
        const element = await this.getDeleteCmpButtonElement();
        I.click(element);
    },

    /*
     * CancelCmpButton
     * ***************************************************************
     */

    async getCancelCmpButtonElement() {
        return (`button[id='cancelCMPButton']`);
    },

    async clickCancelCmpButton() {
        const element = await this.getCancelCmpButtonElement();
        I.click(element);
    },

    /*
     * SaveCmpButton
     * ***************************************************************
     */

    async getSaveCmpButtonElement() {
        return (`button[id='saveCMPButton']`);
    },

    async clickSaveCmpButton() {
        const element = await this.getSaveCmpButtonElement();
        I.click(element);
    },

    /*
     * DeleteContentManagementPo
     * ***************************************************************
     */

    async getDeleteContentManagementPoElement() {
        return (`button[id='deleteContentManagementPolicyConfirmCancel']`);
    },

    async clickDeleteContentManagementPo() {
        const element = await this.getDeleteContentManagementPoElement();
        I.click(element);
    },

    /*
     * DeleteContentManagementPo2
     * ***************************************************************
     */

    async getDeleteContentManagementPo2Element() {
        return (`button[id='deleteContentManagementPolicyConfirmSave']`);
    },

    async clickDeleteContentManagementPo2() {
        const element = await this.getDeleteContentManagementPo2Element();
        I.click(element);
    },

}