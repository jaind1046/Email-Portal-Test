module.exports = {

    //Locators   

    fields: {
        mailBoxInput: `input[class*='user-defined-mailbox-input']`,
        domainNameInput: `#senderGroupDomainTable > tbody > tr.new-unsaved-line.even > td:nth-child(1) > input`,
        policyOptionNameInput: `input[class*='policyOptionNameInput']`
    },
    buttons: {
        addNewSenderGroup: `button[id='addNewSenderGroupButton']`,
        addSenderDomain: `button[id='AddSenderDomainButton']`,
        addSenderMailBox: `button[id='AddSenderMailboxButton']`,
        deleteSenderPolicy: `button[id='deleteSPButton']`,
        cancelSenderPolicy: `button[id='cancelSPButton']`,
        saveSenderPolicy: `button[id='saveSPButton']`,
        deleteSenderGroupConfirmCancel: `button[id='deleteSenderGroupConfirmCancel']`,
        deleteSenderGroupConfirmSave: `button[id='deleteSenderGroupConfirmSave']`,
    },


    //Methods

    /*
     * AddNewSenderGroup & Domain
     * ***************************************************************
     */
    clickAddNewSenderGroupButton() {
        const element = this.buttons.addNewSenderGroup;
        I.click(element);
    },

    clickAddSenderDomainButton() {
        const element = this.buttons.addSenderDomain;
        I.click(element);
    },

    clickAddSenderMailboxButton() {
        const element = this.buttons.addSenderMailBox;
        I.click(element);
    },

    clickSaveSpButton() {
        const element = this.buttons.saveSenderPolicy;
        I.click(element);
    },

    setSendergroupName() {
        const element = this.fields.policyOptionNameInput;
        I.fillField(element);
    },

    setDomainName() {
        const element = this.fields.domainNameInput;
        I.fillField(element);
    },

    setMailBox() {
        const element = this.fields.mailBoxInput;
        I.fillField(element);
    },


    /*
     * DeleteCancelSpButton
     * ***************************************************************
     */

    clickDeleteSpButton() {
        const element = this.buttons.deleteSenderPolicy;
        I.click(element);
    },

    clickCancelSpButton() {
        const element = this.buttons.cancelSenderPolicy;
        I.click(element);
    },

    clickCancelOnDeleteSenderGroupConfirm() {
        const element = this.buttons.deleteSenderGroupConfirmCancel;
        I.click(element);
    },

    clickSaveOnDeleteSenderGroupConfirm() {
        const element = this.getDeleteSenderGroupConfirmSElement();
        I.click(element);
    },


}