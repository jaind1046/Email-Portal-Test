module.exports = {

    //Locators   

    fields: {
        mailBoxInput: `input[class*='user-defined-mailbox-input']`,
        policyOptionNameInput: `input[class*='policyOptionNameInput']`
    },
    buttons: {
        addNewReceiverGroup: `button[id='addNewReceiverGroupButton']`,
        addReceiverMailbox: `button[id='AddReceiverMailboxButton']`,
        deleteReveiverPolicy: `button[id='deleteRPButton']`,
        canceReveiverPolicy: `button[id='cancelRPButton']`,
        saveReveiverPolicy: `button[id='saveRPButton']`,
        deleteReceiverGroupConfirmCancel: `button[id='deleteReceiverGroupConfirmCancel']`,
        deleteReceiverGroupConfirmSave: `button[id='deleteReceiverGroupConfirmSave']`,
        deleteNewMailBoxRecord: `button[class*='new-row']`,
        deleteExistingMailBoxRecord: `button[class*='delete-mailbox-button']`
    },


    //Methods

    /*
     * AddingNewReceiverGroup
     * ***************************************************************
     */
    clickAddNewReceiverGroupButton() {
        const element = this.buttons.addNewReceiverGroup;
        I.click(element);
    },

    clickAddReceiverMailboxButton() {
        const element = this.buttons.addReceiverMailbox;
        I.click(element);
    },

    clickCancelRpButton() {
        const element = this.buttons.canceReveiverPolicy;
        I.click(element);
    },

    clickSaveRpButton() {
        const element = this.buttons.saveReveiverPolicy;
        I.click(element);
    },

    /*
     * Deleting Policy & Mail Box
     * ***************************************************************
     */
    clickDeleteRpButton() {
        const element = this.buttons.deleteReveiverPolicy;
        I.click(element);
    },

    clickDeleteReceiverGroupConfirmCancel() {
        const element = this.buttons.deleteReceiverGroupConfirmSave;
        I.click(element);
    },

    clickDeleteReceiverGroupConfirmSave() {
        const element = this.buttons.deleteReceiverGroupConfirmSave;
        I.click(element);
    },
    clickDeleteMailBoxButton() {
        const element = this.buttons.deleteExistingMailBoxRecord;
        I.click(element);
    },

    clickCancelMailBoxButton() {
        const element = this.buttons.deleteNewMailBoxRecord;
        I.click(element);
    },

}