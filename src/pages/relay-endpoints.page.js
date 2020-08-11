const {
    I
} = inject();

module.exports = {

    //Locators   

    fields: {
        relayEndpointInput: `(//input[@id='relayEndpointInput'])[1]`,
        relayPort: `input[id='port_1']`,
    },
    buttons: {
        relayEndpointTab: `button[id='tab-l1-2']`,
        importRelayEndpoints: `(//button[@id='importRelayEndpoints'])[1]`,
        addRelayEndpoint: `section[id='tab-l1-2-content'] > header > div > button:nth-of-type(2)`,
        deleteEndpoint: `tr[class*='relay-endpoint-row'] > td:nth-of-type(4) > button`,
        cancelEndpoint: `button[id='cancelSaveRelayEndpointsButton']`,
        saveRelayEndpoints: `button[id='saveRelayEndpointsButton']`,
        configModalSave: `button[id='configModalSaveButton']`,
        configModalCancel: `button[id='cancelConfigDeleteConfirm']`,
    },
    modal: {
        configurationDeleteModalContainer: `section[id='configurationDeleteModalContainer']`
    },


    //Methods

    /*
     * AddingRelayEndpoints
     * ***************************************************************
     */
    async clickRelayEndpointTab() {
        const element = this.buttons.relayEndpointTab;
        I.click(element);
    },

    async clickImportRelayEndpoints() {
        const element = this.buttons.importRelayEndpoints;
        I.click(element);
    },

    async getRelayEndpointInput() {
        const element = this.fields.relayEndpointInput;
        return await I.grabAttributeFrom(element, jsonValue());
    },

    async setRelayEndpointInput(value) {
        const element = this.fields.relayEndpointInput;
        I.fillField(element, value);
    },

    async clickAddEndpointBtn() {
        const element = this.buttons.addRelayEndpoint;
        I.click(element);
    },

    async setPort0(value) {
        const element = this.fields.relayPort;
        I.fillField(element, value);
    },

    async clickSaveRelayEndpointsBtn() {
        const element = this.buttons.saveRelayEndpoints;
        I.click(element);
    },

    /*
     * DeleteBtn
     * ***************************************************************
     */
    async clickDeleteBtn() {
        const element = this.buttons.deleteEndpoint;
        I.click(element);
    },

    async clickCancelSaveEndpointsBtn() {
        const element = this.buttons.cancelEndpoint;
        I.click(element);
    },



}