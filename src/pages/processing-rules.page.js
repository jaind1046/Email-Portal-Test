//< reference path = './steps.d.ts' /

const {
    I
} = inject();

module.exports = {

    //Locators   

    fields: {

    },
    buttons: {
        addProcessingRule: `button[id='#addProcessingRuleButton']`,
        deleteProcessingRule: `button[class*='delete-pr-button']`,
        cancelProcessingRule: `button[id='cancelPRButton']`,
        savePRButton: `button[id='savePRButton']`,
        cancelPRDeleteConfirm: `button[id='cancelPRDeleteConfirm']`,
        prModalSaveButton: `button[id='prModalSaveButton']`,
        prDeleteModalClose: `button[id='prDeleteModalClose']`,
    },
    section: {
        title: ".//div[contains(@class, 'numbers__main-title-block')]",
    },
    table: {
        processingRule: "table[id='policyTabPR-content-Table']",
    },
    popUp: {
        notification: `div[class*='toast-message']`
    },


    //Methods

    /*
     * AddingProcessingRule
     * ***************************************************************
     */
    clickAddProcessingRuleButton() {
        const element = this.buttons.addProcessingRule;
        I.click(element);
    },

   async addProcessingRule(sender, receiver, cmp) {
        await this.clickAddPrBtn();
        this.setSendersByText(sender)
        this.setReceiversByText(receiver)
        this.setDefaultContentManagementPByText(cmp)
        this.clickSavePrButton();
    },

    editPrRule(oldSender, newSender, receiver, cmp) {
        this.setSenderByText(this.getSenderElement(oldSender), newSender)
        this.setReceiversByText(receiver)
        this.setDefaultContentManagementPByText(cmp)
        this.clickSavePrButton();
    },


    /*
     * DeleteProcessingRuleButton
     * ***************************************************************
     */

    clickDeleteProcessingRuleButton() {
        const element = this.buttons.deleteProcessingRule;
        I.click(element);
    },

    clickCancelPrButton() {
        const element = this.buttons.cancelProcessingRule;
        I.click(element);
    },

    clickSavePrButton() {
        const element = this.buttons.savePRButton;
        I.click(element);
    },

    clickCancelPrDeleteConfirm() {
        const element = this.buttons.cancelPRDeleteConfirm;
        I.click(element);
    },

    /*
     * Modal
     * ***************************************************************
     */
    clickPrModalSaveButton() {
        const element = this.buttons.prModalSaveButton;
        I.click(element);
    },

    clickPrDeleteModalClose() {
        const element = this.buttons.prDeleteModalClose;
        I.click(element);
    },

    /*
     * Notification
     * ***************************************************************
     */

    async getNotification() {
        const element = this.popUp.notification;
        return await I.grabTextFrom(element);
    }

}